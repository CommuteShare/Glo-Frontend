import React from "react";
import BookRideImg from "../assets/BookRide.svg";

function Body2() {
  return (
    <div className="container-fluid row p-5 mt-5 ms-0 w-100" id="body2Cover">
      <div className="col ms-5 mt-4" id="bookRideText">
        <h1 className="display-2" style={{ color: "#008080" }}>
          Wondering how to get to work?
        </h1>
        <button
          className=""
          id="bookRideBtn"
          style={{ backgroundColor: "#008080" }}
        >
          Book a ride with us
        </button>
      </div>
      <div className="col-sm" id="bookRideImgCover">
        <img src={BookRideImg} alt="" id="bookRIdeImg" />
      </div>
    </div>
  );
}

export default Body2;
