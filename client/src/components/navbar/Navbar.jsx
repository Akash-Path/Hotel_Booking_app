import { useContext } from "react"
import "./navbar.css"
import {Link} from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"

const Navbar = () => {

  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.avatar')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  const logoutF = ()=>{
    localStorage.clear();
    window.location.reload(false)
  }

  const {user} = useContext(AuthContext)
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{color:"inherit", textDecoration:"none",} }><span className="logo">Monkey Group of Hotels</span></Link>
       <div className="lsButton"> {user ? (<img src={user.img || "https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"} onClick={myFunction} alt="img" className="avatar"/>): (<Link to={"/login"}><button className="headerBtn">Sign in / Register</button></Link>)} </div>
       <div id="myDropdown" class="dropdown-content">
    <Link to={"/"} onClick={logoutF}>Logout</Link>
  </div>
       {/* <div className="logout">{user ? (<button>Logout</button>) : null}</div> */}
      </div>
    </div>
  )
}

export default Navbar