import React from "react";
import html from "../images/HTML.png";
import css from "../images/CSS.png";
import js from "../images/JS.png";
import python from "../images/Python.png";
import react from "../images/React.png";
import ai from "../images/AI.png";
import "../styles/about.css";

const About = () => (
  <div className="aboutInfoContainer">

    <div className="aboutTitle">
      <h2>A little about me!</h2>
    </div>
    <p>
      I am a motivated developer with experience creating custom websites
      using React/JS, HTML and CSS. I have strong collaboration and leadership
      skills having a good deal of experience working on teams.
    </p>
    <div className="skillImgContainer">
      <img src={html} alt="" className="skillImg" />
      <img src={css} alt="" className="skillImg" />
      <img src={js} alt="" className="skillImg" />
      <img src={python} alt="" className="skillImg" />
      <img src={react} alt="" className="skillImg" />
      <img src={ai} alt="" className="skillImg" />
    </div>
  </div>
);

export default About;
