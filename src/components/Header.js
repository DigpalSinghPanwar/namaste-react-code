import React, { useContext, useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

export default Header = () => {
  const [btnReact, setbtnReact] = useState("login");

  const onlineStatus = useOnlineStatus();

  // if no dependency array ⇒ useEffect is called on every render
  // if dependency array is empty = [] ⇒ useEffect is called on initial render(just once)
  // if dependency array is [btnNameReact] ⇒ called everytime btnNameReact is updated.
  // useEffect(() => {
  //   console.log("useEffect Rendered");
  // }, []);

  const user = useContext(UserContext);

  return (
    <div className="flex justify-between bg-pink-50 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
      <div className="logo-container">
        <img className="w-56" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status - {onlineStatus ? "✅" : "❌"}</li>
          <li className="px-4">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="px-4">
            <Link to={"/about"}>About Us</Link>
          </li>
          <li className="px-4">
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to={"/grocery"}>Grocery</Link>
          </li>
          <li className="px-4">Cart</li>
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
          <li className="px-4 font-bold">{user.loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};
