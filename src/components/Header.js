import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login");
  
  
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo-container"
            src={LOGO_URL}
          />
        </div>
        <div className="nav-items">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="about">About us</Link></li>
            <li><Link to="/contact">Contact us</Link> </li>
            <li>Cart</li>
            <button  className="login-btn" onClick={()=>{
             btnNameReact === "Login" ? setbtnNameReact ("Logout") : setbtnNameReact("Login");
            }}>{btnNameReact}</button>
          </ul>
        </div>
      </div>
    );
  };

export default Header;  