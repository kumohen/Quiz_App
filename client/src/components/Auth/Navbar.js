import React from "react";
import Timer from "../Timer";

const Navbar = () => {
  // if (JSON.parse(localStorage.getItem("user")) !== null) {
  const image = JSON.parse(localStorage.getItem("user")).image;
  const username = JSON.parse(localStorage.getItem("user")).name;

  return (
    <div className="navbar">
      <h3>Quiz Test</h3>
      <div className="timer_nav">
        <Timer />
      </div>
      <div className="student">
        <img src={image} alt="mohen" id="img_style" />
        <p>{username && username}</p>
      </div>
    </div>
  );
};

export default Navbar;
