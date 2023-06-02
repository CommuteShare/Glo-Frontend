import React from "react";
import NavBar from "./NavBar";
import ValidateImage from "../assets/ValidateImage.svg";
import { useState } from "react";

function ValidatePassenger() {
  const [gender, setGender] = useState("");
  const [photograph, setPhotograph] = useState("");
  const [idCard, setIdCard] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const validateErrors = {};

    if (!photograph) {
      validateErrors.photograph = "Please upload a photograph.";
    }

    if (!idCard) {
      validateErrors.idCard = "Please upload an identification card.";
    }

    if (Object.keys(validateErrors).length === 0) {
      console.log("Forms submitted");
    } else {
      setErrors(validateErrors);
    }
  };

  return (
    <div>
      <NavBar />

      <div className="valid-container">
        <form className="valid-form" id="valid-form" onSubmit={handleSubmit}>
          <h1 id="h1">Welcome Glory</h1>
          <p id="p">Enter details to become a passenger</p>

          <div className="gender-container">
            <label htmlFor="gender">Gender</label>
            <select
              id="gender"
              name="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          {errors.gender && <p className="error">{errors.gender}</p>}

          <div className="file">
            <label id="valid-photo">Photograph</label>
            <input type="file" id="valid-photograph" />
            <label id="id-card">Identification Card</label>
            <input type="file" id="valid-id" />
          </div>
          <button>Continue</button>
        </form>
      </div>
    </div>
  );
}

export default ValidatePassenger;
