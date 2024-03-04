import React from "react";
import "./Register.css";
import RegisterImage from "../../assets/img/lock.jpg";
import { FaGoogle, FaFacebook, FaApple } from "react-icons/fa";

const RegisterPage = () => {
  return (
    <div className="registration-container">
      <div className="registration-form">
        <form className="form-register-block">
          <h1>Sign Up</h1>
          <div className="form-group">
            <input type="text" name="name" placeholder="Your Name" />
          </div>
          <div className="form-group">
            <input type="email" name="email" placeholder="Your Email" />
          </div>
          <div className="form-group">
            <input type="password" name="password" placeholder="Password" />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
            />
          </div>
          <div className="social">
            <FaGoogle className="socialicon" style={{ color: "white" }} />
            <FaFacebook className="socialicon" style={{ color: "white" }} />
            <FaApple className="socialicon" style={{ color: "white" }} />
          </div>
          <button className="register-button" type="submit">
            Register
          </button>
          <div className="returnh">
            <a href="/" className="rethome">
              Return to homepage
            </a>
          </div>
        </form>
        <div className="image-container-register">
          <img
            src={RegisterImage}
            alt="Sign Up"
            className="img-reg"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
