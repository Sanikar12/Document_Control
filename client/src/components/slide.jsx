import React from "react";
import "../styles/Slidebarnew.css";
import { Navbar } from "./Navbar";
import { useNavigate } from "react-router";

export const Slidebar = ({ sidebar }) => {
  const navigate = useNavigate();

  return (
    <div className={`slidebar ${sidebar ? "" : "small-slidebar"}`}>
      <div className="shortcut-links">
        <div className="side-link">
          <p onClick={() => navigate("/")}>Home</p>
        </div>
        <hr />
        <div className="side-link">
          <p onClick={() => navigate("/MasterP")}>Master Table</p>
        </div>
        <hr />
        <div className="side-link">
          <p onClick={() => navigate("/Table")}>Upload Form</p>
        </div>
        <hr />

        <div className="side-link">
          <p onClick={() => navigate("/TransmitP")}>Transmittal Form</p>
        </div>
        <hr />
        <div className="side-link">
          <p onClick={() => navigate("/UploadTab")}>Upload Table</p>
        </div>
        <hr />
        <div className="side-link">
          <p onClick={() => navigate("/TransmitTab")}>Transmittal Table</p>
        </div>
        <hr />
        <div className="side-link">
          <p>Client Table</p>
        </div>
        <hr />
        <div className="side-link">
          <p>Project Table</p>
        </div>
      </div>
    </div>
  );
};
