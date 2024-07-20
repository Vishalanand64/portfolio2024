import React from "react";
import "./SkillStack.css";
import js from "../assets/js.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import { Link } from "react-router-dom";
import cross from '../assets/cross.png'

import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import node from "../assets/node.png";
import express from "../assets/express.png";
import mongoose from "../assets/mongoose.png";

import mongoi from "../assets/mongoi.png";
import giti from "../assets/giti.png";
import githubi from "../assets/githubi.png";
import figma from "../assets/figma.png";
import postman from "../assets/postman.png";

const SkillStack = () => {
  return (
    <div className="skill-page">
      <div className="skill-toast">
        <div className="toast">
          <div className="toast-circle">!</div>
          <p>Skill Stack</p>
          <Link to='/'><img className="cross" src={cross} alt="" /></Link>
        </div>
      </div>
      <div className="language-stack sub-container">
        <div className="left-lan">
          <p>Languages</p>
        </div>
        <div className="right-lan">
          <img src={html} className="lan-icon" alt="" />
          <img src={css} className="lan-icon" alt="" />
          <img src={js} className="lan-icon" alt="" />
        </div>
      </div>

      <div className="framework-stack sub-container">
        <div className="left-lan">
          <p>Libraries/Frameworks</p>
        </div>
        <div className="right-lan">
          <img src={react} className="lan-icon" alt="" />
          <img src={tailwind} className="lan-icon" alt="" />
          <img src={node} className="lan-icon" alt="" />
          <img src={express} className="lan-icon" alt="" />
          <img src={mongoose} className="lan-icon" alt="" />
        </div>
      </div>

      <div className="additional-stack sub-container">
        <div className="left-lan">
          <p>Additional Skills</p>
        </div>
        <div className="right-lan">
          <img src={mongoi} className="lan-icon" alt="" />
          <img src={giti} className="lan-icon" alt="" />
          <img src={postman} className="lan-icon" alt="" />
          <img src={githubi} className="lan-icon" alt="" />
          <img src={figma} className="lan-icon" alt="" />
        </div>
      </div>
    </div>
  );
};

export default SkillStack;
