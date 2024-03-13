import React, { useState } from "react";
import { LOGO_URL } from "../utils/constants";

export default Header = () => {
  const [btnReact, setbtnReact] = useState("login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnReact === "login"
                ? setbtnReact("logout")
                : setbtnReact("login");
            }}
          >
            {btnReact}
          </button>
        </ul>
      </div>
    </div>
  );
};
