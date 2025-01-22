import React, { useEffect } from 'react'
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  useEffect(()=>{
    const verifyUser = async ()=>{
        if(!cookies.jwt){
            navigate("/login");
        }else{
            const {data} = await axios.post("http://localhost:4000",
                {},{
                    withCredentials:true,}
                );
                if(!data.status){
                    removeCookie("jwt");
                    navigate("/login")
                } 
        }
    }
    verifyUser();
  },[cookies,navigate,removeCookie]
)
const logOut = ()=>{
    removeCookie("jwt");
    navigate("/login");
};
  return (
    <div className="private">
        <h1>Super Secret Page</h1>
        <button onClick={logOut}>Log out</button>
      </div>
  )
}

export default Home