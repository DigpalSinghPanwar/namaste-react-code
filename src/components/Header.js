import React, { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

export default Header = () => {
  const [btnReact, setbtnReact] = useState("login");

  // if no dependency array ⇒ useEffect is called on every render
  // if dependency array is empty = [] ⇒ useEffect is called on initial render(just once)
  // if dependency array is [btnNameReact] ⇒ called everytime btnNameReact is updated.
  useEffect(() => {
    console.log("useEffect Rendered");
  }, []);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About Us</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact Us</Link>
          </li>
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
