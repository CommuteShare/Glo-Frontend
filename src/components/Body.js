import React from "react";
import DriverLogo from "../assets/DriverLogo.svg";
import RightArrow from "../assets/RightArrow.svg";
import ApplyLogo from "../assets/ApplyLogo.svg";
import GetVerifiedLogo from "../assets/GetVerified.svg";
import StartDrivingLogo from "../assets/startDriving.svg";
import { Link } from "react-router-dom";

function Body() {
  return (
    <div
      className="container-fluid text-center row mt-5 p-5"
      id="steps-2-drive"
    >
      <div className="col-sm">
        <img src={DriverLogo} alt="" />
        <h2>
          <span style={{ color: "#339999" }}>Three steps to</span> become a
          driver
        </h2>
        <Link to="SignUp">
          <button
            style={{ backgroundColor: "#339999" }}
            className="rounded border-0 p-2 px-4 m-3"
            id="steps-btn"
          >
            Apply to Drive
          </button>
        </Link>
      </div>
      <div className="col-sm mt-5">
        <img src={RightArrow} alt="" id="arrowImg" />
      </div>

      <div className="col-sm mt-4">
        <img src={ApplyLogo} alt="" />
        <h3 style={{ color: "#339999" }} className="mt-2">
          Apply to Drive
        </h3>
      </div>
      <div className="col-sm">
        <img src={GetVerifiedLogo} alt="" />
        <h3 style={{ color: "#339999" }}>Get Verified</h3>
      </div>
      <div className="col-sm mt-5">
        <img src={StartDrivingLogo} alt="" />
        <h3 style={{ color: "#339999" }} className="mt-2">
          Start to Drive
        </h3>
      </div>
    </div>
  );
}

export default Body;
