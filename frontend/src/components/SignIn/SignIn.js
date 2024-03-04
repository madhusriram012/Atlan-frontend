import React from "react";
import "./SignIn.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import LoginImage from "../../assets/img/lock.jpg";
import { FaGoogle, FaFacebook, FaApple } from "react-icons/fa";

const SignPage = () => {
  const handleChange = (e) => {};
  const handleSubmit = (e) => {};

  return (
    <div className="signIn-container">
      <div className="signIn-form">
        <form onSubmit={handleSubmit} className="form-login-block">
          <div className="imagetop">
            <img
              src={LoginImage}
              style={{
                width: "200px",
                height: "200px",
                borderRadius: "8px",
                marginTop: "80px",
              }}
              loading="lazy"
              alt="lock_sreen"
            />
          </div>
          <div className="top_icon">
            <FontAwesomeIcon
              icon={faUser}
              style={{ color: "white", marginLeft: "25px" }}
            />
            <div className="h1_class">
              <h1>Sign In</h1>
            </div>
          </div>
          <div className="form-group">
            <input
              className="signinput"
              type="email"
              name="email"
              onChange={handleChange}
              placeholder="Email"
            />
          </div>
          <div className="form-group">
            <input
              className="signinput"
              type="password"
              name="password"
              onChange={handleChange}
              placeholder="Password"
            />
          </div>
          <div className="socialmedia">
            <FaGoogle className="socialicon" style={{ color: "white" }} />
            <FaFacebook className="socialicon" style={{ color: "white" }} />
            <FaApple className="socialicon" style={{ color: "white" }} />
          </div>
          <button className="login-button" type="submit">
            Sign In
          </button>
          <div className="returnlog">
            <a href="/">Return to homepage</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignPage;
