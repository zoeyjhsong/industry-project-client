import React from "react";
import "./Homepage.scss";
import { NavLink } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="hero">
      <h1>Let's Book a Table For You</h1>
      <div className="hero__img"></div>

      <NavLink to="/booking">
        <div className="hero__button">Find a Table</div>
      </NavLink>
    </div>
  );
};

export default Homepage;
