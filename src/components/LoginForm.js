import React from "react";
import { Link, useNavigate } from "react-router-dom";
import SignUp from "../container/SignUp";
import NavBar from "./NavBar";
import { useState } from "react";
import axios from "axios";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [userData, setUserData] = useState([]);
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleUserData = (event) => {
    event.preventDefault();

    const data = {
      username: username,
      password: password,
    };

    axios
      .post("http://localhost:8000/auth/jwt/create", data)
      .then((response) => {
        setUserData(response.data);
        navigate("/verification-page");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = {};
    if (username.trim() === "") {
      validationErrors.userName = "User name is required.";
    }

    if (password.trim() === "") {
      validationErrors.password = "Password is required.";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
    }

    handleUserData(event);
  };

  return (
    <div>
      <NavBar />
      <div className="container-fluid" id="form-cover">
        <form className="form-body" id="form" onSubmit={handleSubmit}>
          <input type="text" placeholder="User name" className=" " />
          <input type="text" placeholder="Password" className=" " />
          <Link
            to="LoginForm"
            aria-current="page"
            onClick={() => console.log("clicked")}
          >
            <Link to="/verification-page">
              <button
                type="submit"
                id="submitBtn"
                style={{ backgroundColor: "#339999" }}
                onClick={() => console.log("clicked")}
              >
                Submit
              </button>
            </Link>
          </Link>
          <p>
            Don't have an account?
            <Link to="/SignUp" onClick={() => console.log("clicked")}>
              Sign Up
            </Link>
          </p>
          <p id="signUp-text">
            By proceeding, you consent to get calls, WhatsApp or SMS messages,
            including by automated means, from CommuteShare and its affiliates
            to the number provided. This site is protected by reCAPTCHA and the
            Google Privacy Policy and Terms of Service apply.
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
