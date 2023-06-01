import React from "react";
import DashBoard from "../container/DashBoard";

function LoginForm() {
  const prevent = (e) => {
    e.preventDefault();
    return  (
    <DashBoard/>
    )
  };
  return (
    <div>
      <div className="container-fluid" id="form-cover">
        <form className="" id="form" >
          <input type="text" placeholder="UserName" className="  " />
          <input type="text" placeholder="Password" className=" " />
          <button
            id="submitBtn"
            style={{ backgroundColor: "#339999" }}
            onClick={prevent}
          >
            Login
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

export default LoginForm;
