
// import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import "../register/register.css"
import { useState } from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom"

const New = ({ inputs, title }) => {
  const [file, setFile] = useState("");
  const [info, setInfo] = useState({})

  const navigate = useNavigate()

  const handleChange = (e)=>{
    setInfo((prev)=>({...prev, [e.target.id]: e.target.value}));
  }

  const handleClick= async (e)=>{
    e.preventDefault()
    const data = new FormData()
    data.append("file",file)
    data.append("upload_preset","upload")
    try {
      const uploadRes = await axios.post("https://api.cloudinary.com/v1_1/your user name/image/upload", data)
      const {url} = uploadRes.data 

      const newUser = {
        ...info,
        img:url,
      };
      await axios.post("/auth/register", newUser)
      alert("User has been created")
      setTimeout(() => {
        navigate("/login")
      }, 1000);
    } catch (err) {
      console.log(err)
    }
  }
  console.log(info)

  return (
    <div className="new">
    
      <div className="newContainer">
      
        <div className="top">
          <h1 className="rheading">Register</h1>
        </div>
        <div className="bottom">
          <div className="profilePic">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt="" className="profileImg"
            />
          </div>
       
            <form>
              <div className="formInput">
                <label htmlFor="file">
                 
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  className="inputFile"
                  // style={{ display: "none" }}
                />
              </div>

              {/* {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input onChange={handleChange} type={input.type} placeholder={input.placeholder} id={input.id} />
                </div>
              ))} */}

       <input type="text" placeholder="User name" id="username" onChange={handleChange} className="lInput"/>
        <input type="password" placeholder="password" id="password" onChange={handleChange} className="lInput"/>
       <input type="text" placeholder="email" id="email" onChange={handleChange} className="lInput"/>
       <input type="text" placeholder="phone" id="phone" onChange={handleChange} className="lInput"/>
       <input type="text" placeholder="city" id="city" onChange={handleChange} className="lInput"/>
       <input type="text" placeholder="country" id="country" onChange={handleChange} className="lInput"/>
       <p className="message">Already have an account?<Link to={"/login"}>Click here!</Link></p>
              <button onClick={handleClick} className="lButton">Send</button>
            </form>
          </div>
        </div>
      </div>
   
  );
};

export default New;
