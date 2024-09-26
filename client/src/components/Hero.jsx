import React from "react";
import "../styles/Hero.css";
import bgImg from "../assets/sdoc1.png";
import { useNavigate } from "react-router";

export const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="hero-section">
      <div className="hero-info">
        <h1>Documents Handler</h1>
        <button  onClick={()=>navigate("/MasterP")} className="hero-btn">Your Projects</button>
      </div>
      <img className="heroImg" src={bgImg} alt="" />
    </div>
  );
};


