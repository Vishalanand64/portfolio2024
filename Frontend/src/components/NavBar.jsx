import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavigationBar = () => {
  return (
    <div className="navtop">
      <div className="navbar">
        <div className="left-container">
          <h2 className="logo">Vishal.Dev</h2>
        </div>

        <div className="right-container">
          <ul className="nav-items">
            <li>
              <NavLink to="/" className="navItem">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="navItem">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/skills" className="navItem">
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink to="/work" className="navItem">
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="navItem">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

      </div>

      <div className="hamBurgerContainer">
        <NavLink className="hamburgerNavItem" to='/'>Home</NavLink>
        <NavLink className="hamburgerNavItem" to="/about">About</NavLink>
        <NavLink className="hamburgerNavItem" to="/skills">Skill</NavLink>
        <NavLink className="hamburgerNavItem" to="/work" >Work</NavLink>
        <NavLink className="hamburgerNavItem" to="/contact">Conatct</NavLink>
      </div>




    </div>
  );
};

export default NavigationBar;
