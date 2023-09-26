import React, { useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { PiSignOut } from "react-icons/pi";

const NavBar = () => {
  const [signIn, setSignIn] = useState(false);
  console.log(signIn);
  return (
    <div className="Nav">
      <h2 className="Nav__heading">
        <span>RD</span>Real DOC
      </h2>
      {signIn ? (
        <div className="Nav__links">
          <Link to="/home">Home</Link>
          <Link to="/register">Get Started</Link>
          <Link to="/login">Sign In</Link>
        </div>
      ) : (
        <div className="Nav__links">
          <Link to="/home">Home</Link>
          <a
            onClick={() => {
              setSignIn(!signIn);
            }}
          >
            <PiSignOut />
          </a>
        </div>
      )}
    </div>
  );
};

export default NavBar;
