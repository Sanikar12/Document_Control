import React, { Fragment, useState } from "react";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import FaceIcon from "@mui/icons-material/Face";
import { register } from "./Action";
import { useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";
import "../styles/register.css";

export const RegisterPage = () => {
  const [registeremail, setregisteremail] = useState("");
  const [registerpassword, setregisterpassword] = useState("");
  const [registername, setregistername] = useState("");
  const [alertOpen, setAlertOpen] = useState(false);
  const [severity, setSeverity] = useState("");
  const [alertMessage, setAlertMessage] = useState("");

  const navigate = useNavigate();

  const registerSubmit = async (e) => {
    e.preventDefault();
    let response = await register(
      registername,
      registeremail,
      registerpassword
    );
    if (response === true) {
      setAlertOpen(true);
      setSeverity("success");
      setAlertMessage("Registered successfully !!");
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
      <div className="register-cont">
        {alertOpen ? (
          <div className="alertMessage">
            <Alert severity={severity}>{alertMessage}</Alert>
          </div>
        ) : (
          ""
        )}

        <div className="register-box">
          <div className="registerhead">
            <p>Register</p>
          </div>
          <form className="registerForm" onSubmit={registerSubmit}>
            <div className="registerName">
              <FaceIcon />
              <input
                type="text"
                placeholder="Name...."
                required
                value={registername}
                onChange={(e) => setregistername(e.target.value)}
              />
            </div>
            <div className="registerEmail">
              <EmailIcon />
              <input
                type="email"
                placeholder="Email...."
                required
                value={registeremail}
                onChange={(e) => setregisteremail(e.target.value)}
              />
            </div>
            <div className="registerPassword">
              <LockIcon />
              <input
                type="password"
                placeholder="Password...."
                required
                value={registerpassword}
                onChange={(e) => setregisterpassword(e.target.value)}
              />
            </div>

            <input type="submit" value="register" className="registerBtn" />
          </form>
        </div>
      </div>
    </Fragment>
  );
};

