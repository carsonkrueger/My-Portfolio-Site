import React from "react";
// import "../styles/Navbar.css";
import carrotImg from "../assets/carrotBrackets.svg";

const Navbar = () => {
  return (
    <div id="navbar">
      <img src={carrotImg} id="nav-img"></img>
      <div id="nav-text-container">
        <h1>Carson Krueger</h1>
        <h1>Contact me</h1>
      </div>
    </div>
  );
};

export default Navbar;
