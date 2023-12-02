import { useContext, useState } from "react"
import "./login.css"
import { AuthContext } from "../../context/AuthContext"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"

const Login = () => {
    const [ credentials, setCredentials] = useState({
       username:undefined,
       password:undefined, 
    })

    const {loading,error,dispatch} = useContext(AuthContext)

    const navigate = useNavigate();

    const handleChange = (e)=>{
        setCredentials((prev)=>({...prev, [e.target.id]: e.target.value}))
    }

    const handleClick = async (e)=> {
        e.preventDefault();
        dispatch({ type:"LOGIN_START"});
        try {
           const res= await axios.post("/auth/login", credentials);
           dispatch({ type:"LOGIN_SUCCESS",payload: res.data.details});
           navigate("/")
        } catch (err) {
            dispatch({type:"LOGIN_FAILURE",payload: err.response.data});
        }

    }
    

  return <div className="login">
    <div className="lContainer">
        <div className="top">
        <h1 className="lheading">Login</h1>
        </div>
        <div className="bottom">
        <input type="text" placeholder="username" id="username" onChange={handleChange} className="mInput"/>
        <input type="password" placeholder="password" id="password" onChange={handleChange} className="mInput"/>
        <button onClick={handleClick} disabled={loading} className="loginButton">Login</button>
        {error && <span>{error.message}</span>}
        <p className="lmessage">Don't have an account? <Link to={"/register"}>Click here!</Link></p>
        </div>
    </div>
  </div>
}

export default Login
