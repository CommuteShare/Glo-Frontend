import React, { useState } from "react";

function SignUpForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");

  const handSubmit = (e) => {
    e.preventDefault();
  };

  const firstNameChange = (e) => {
    setFirstName(e.target.value);
  };
  const lashNameChange = (e) => {
    setLastName(e.target.value);
  };
  const emailChange = (e) => {
    setEmail(e.target.value);
  };
  const phoneNoChange = (e) => {
    setPhoneNo(e.target.value);
  };
  return (
    <div>
      <div className="container-fluid" id="form-cover">
        <form className="" id="form">
          <input
            type="text"
            placeholder="First Name"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={firstNameChange}
          />
          <input
            type="text"
            placeholder="Last Name"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={lashNameChange}
          />
          <input
            type="email"
            placeholder="Email"
            id="email"
            name="email"
            value={email}
            onChange={emailChange}
          />
          <input
            type="text"
            placeholder="Phone No"
            id="phone"
            name="phone"
            value={phoneNo}
            onChange={phoneNoChange}
          />
          <button
            type="submit"
            id="submitBtn"
            style={{ backgroundColor: "#339999" }}
            onClick={handSubmit}
          >
            Submit
          </button>
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

export default SignUpForm;
