import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login");
  
  useEffect(() => {
    console.log("useEffect called")
  });
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
            <li>Home</li>
            <li>About Us</li>
            <li>Contact us</li>
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