import React from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm";
import NavBar from "./NavBar";
import { useState } from "react";
import axios from "axios";

function Form() {
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState([]);
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setphoneNumber(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleUserData = (event) => {
    event.preventDefault();

    const data = {
      username: username,
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNumber: phoneNumber,
      password: password,
    };

    axios
      .post("http://localhost:8000/auth/users", data)
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

    if (firstName.trim() === "") {
      validationErrors.firstName = "First name is required.";
    }

    if (lastName.trim() === "") {
      validationErrors.lastName = "Last name is required.";
    }

    if (email.trim() === "") {
      validationErrors.email = "Email is required.";
    }

    if (phoneNumber.trim() === "") {
      validationErrors.phoneNumber = "Phone number is required.";
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
      <div className="container-fluid" id="form-cover">
        <form className="" id="form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="User Name"
            className=" "
            onChange={handleUsernameChange}
          />
          {errors.userName && <span>{errors.userName}</span>}
          <input
            type="text"
            placeholder="First Name"
            className="  "
            onChange={handleFirstNameChange}
          />
          {errors.firstName && <span>{errors.firstName}</span>}
          <input
            type="text"
            placeholder="Last Name"
            className=" "
            onChange={handleLastNameChange}
          />
          {errors.lastName && <span>{errors.lastName}</span>}
          <input
            type="text"
            placeholder="Email"
            className=" "
            onChange={handleEmailChange}
          />
          {errors.email && <span>{errors.email}</span>}
          <input
            type="text"
            placeholder="Phone No"
            className=" "
            onChange={handlePhoneNumberChange}
          />

          {errors.phoneNumber && <span>{errors.phoneNumber}</span>}
          <input
            type="text"
            placeholder="Password"
            className=""
            onChange={handlePasswordChange}
          />
          {errors.password && <span>{errors.password}</span>}

          <div className="drivercheckbox">
            <input type="checkbox" />
            <label id="is-driver">Is driver?</label>
          </div>

          <p id="question">
            Already have an account?<Link to="/LoginForm">Log in</Link>
          </p>
          <Link to="/verification-page">
            <button
              id="submitBtn"
              style={{ backgroundColor: "#339999" }}
              onClick={() => console.log("clicked")}
            >
              Submit
            </button>
          </Link>

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

export default Form;
