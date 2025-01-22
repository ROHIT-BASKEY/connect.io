const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const authRouters = require("./routes/AuthRoutes")
mongoose
  .connect('mongodb://localhost:27017/jwt', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('DB IS CONNECT SUCCESFULLY')
  })
  .catch((err) => {
    console.log(err.message)
  })

const app = express()
app.listen(4000, () => {
  console.log('server running at port 4000')
})

app.use(
  cors({
    origin: ['http://localhost:5173'],
    method: ['GET', 'POST'],
    Credential: true,
  })
)
app.use(cookieParser())
app.use(express.json())
app.use("/",authRouters);