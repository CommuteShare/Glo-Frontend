import { Button } from "bootstrap";
import React from "react";

function Form() {
  const prevent = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <div className="container-fluid" id="form-cover">
        <form className="" id="form">
          <input type="text" placeholder="First Name" className="  " />
          <input type="text" placeholder="Last Name" className=" " />
          <input type="email" placeholder="Email" className=" " />
          <input type="text" placeholder="Phone No" className=" " />
          <button
            id="submitBtn"
            style={{ backgroundColor: "#339999" }}
            onClick={prevent}
          >
            Submit
          </button>
          <p id="signUp-text">
          By proceeding, you consent to get calls, WhatsApp or SMS messages,
          including by automated means, from CommuteShare and its affiliates to
          the number provided. This site is protected by reCAPTCHA and the
          Google Privacy Policy and Terms of Service apply.
        </p>
        </form>
        
      </div>
    </div>
  );
}

export default Form;
