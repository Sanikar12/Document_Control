import React from "react";
import Facebook from "@mui/icons-material/FacebookRounded";
import Instagram from "@mui/icons-material/Instagram";
import Twitter from "@mui/icons-material/Twitter";
import "../styles/Footer.css";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h4>
            <bold>Contact Us: insuranceclaim@gmail.com</bold>
          </h4>
        </div>
        <div>
          <a href="/">
            <Facebook />
          </a>
          <a href="/">
            <Instagram />
          </a>
          <a href="/">
            <Twitter />
          </a>
        </div>
      </div>
    </div>
  );
};


