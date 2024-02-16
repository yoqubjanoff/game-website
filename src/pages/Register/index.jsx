import React, { useState } from "react";
import "./index.css";
import close from "../../assets/icons/hide.png";
import view from "../../assets/icons/view.png";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [open, setOpen] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const navigate = useNavigate();
  function encodeBase64(str) {
    return btoa(str);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    if (email === "root123" && password === "root123") {
      localStorage.setItem("tokenAdmin", encodeBase64(email + ":" + password));
      navigate("/admin");
    } else {
      setLoginError(true);
    }
  };

  return (
    <div className="admin-register">
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          className="email-input"
          name="email"
          placeholder="Enter your login"
          style={{border: loginError ? '1px solid red' : '1px solid transparent'}}
        />
        <div className="pass-div">
          <input
            className="pass-input"
            name="password"
            type={open ? "text" : "password"}
            placeholder="Enter your password"
            style={{border: loginError ? '1px solid red' : '1px solid transparent'}}
          />
          <img
            className="eye"
            src={open ? close : view}
            alt="eye image"
            onClick={() => setOpen(!open)}
            
          />
        </div>
        <input className="input-btn" type="submit" value="Register" />
        <p className="errorText" style={{ opacity: loginError ? 1 : 0 }}>
          Incorrect email or password.
        </p>
      </form>
    </div>
  );
};

export default Register;
