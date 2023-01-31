import React from "react";
import "../styles/Navbar.css";
import carrotImg from "../assets/carrotBrackets.svg";

const Navbar = () => {
  return (
    <div id="navbar">
      <img src={carrotImg} id="head-img"></img>
      <h1>Carson Krueger</h1>
      <h1>Hire me</h1>
    </div>
  );
};

export default Navbar;
