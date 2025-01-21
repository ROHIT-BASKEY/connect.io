import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Register from "./pages/Register";
import Login from "./pages/Login";
import './input.css'
const App  =()=>{
  return <BrowserRouter>
    <Routes>
      <Route exact path='/register' element={<Register/>}/>
      <Route exact path='/login' element={<Login/>}/>
      <Route exact path='/' element={<Register/>}/>
    </Routes>
  </BrowserRouter>
}
export default App