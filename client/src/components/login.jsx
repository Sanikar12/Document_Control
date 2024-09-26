


import React, { Fragment, useState } from "react";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import { Link } from "react-router-dom";
import { login } from "./Action";
import { useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";
import "../styles/login.css";

export const LoginPage = () => {
  const [loginemail, setloginemail] = useState("");
  const [loginpassword, setloginpassword] = useState("");
  const [alertOpen, setAlertOpen] = useState(false);
  const [severity, setSeverity] = useState("");
  const [alertMessage, setAlertMessage] = useState("");

  const navigate = useNavigate();

  const loginSubmit = async (e) => {
    e.preventDefault();
    let response = await login(loginemail, loginpassword);
    if (response === true) {
      setAlertOpen(true);
      setSeverity("success");
      setAlertMessage("Logged in successfully !!");
    } else {
      setAlertOpen(true);
      setSeverity("error");
      setAlertMessage(response);
    }

    setTimeout(() => {
      setAlertOpen(false);
      setAlertMessage("");
      setSeverity("");
      if (response === true) {
        navigate("/projects");
      }
    }, 2000);
  };

  return (
    <Fragment>
      <div className="login-cont">
        {alertOpen ? (
          <div className="alertMessage">
            <Alert severity={severity}>{alertMessage}</Alert>
          </div>
        ) : (
          ""
        )}
        <div className="login-box">
          <div className="loghead">
            <p>Login</p>
          </div>
          <form className="loginForm" onSubmit={loginSubmit}>
            <div className="loginEmail">
              <label className="login-label">Email </label>
              <div className="login-input">
                <input
                  type="email"
                  required
                  value={loginemail}
                  onChange={(e) => setloginemail(e.target.value)}
                />
              </div>
            </div>
            <div className="loginPassword">
              <label className="login-label">Password </label>
              <div className="login-input">
                <input
                  type="password"
                  required
                  value={loginpassword}
                  onChange={(e) => setloginpassword(e.target.value)}
                />
              </div>
            </div>
            <div className="login-links">
              <Link className="login-link" to="/registerv1">
                Don't have Account ?
              </Link>
              <Link className="login-link" to="/password/forgot">
                Forget Password ?
              </Link>
            </div>

            <input type="submit" value="Login" className="loginBtn" />
          </form>
        </div>
      </div>
    </Fragment>
  );
};


