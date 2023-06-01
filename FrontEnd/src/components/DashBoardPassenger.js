import React, { useEffect, useState } from "react";
import ProfileImg from "../assets/Chibuzor.png";
import map from "../assets/CommuteShareMap.png";
import profileLogo from "../assets/profileLogo.svg";
import bookRideLogo from "../assets/bookRideLogo.svg";
import rideHistoryLogo from "../assets/rideHistoryLogo.svg";
import notificationLogo from "../assets/notificationLogo.svg";
import logoutLogo from "../assets/logoutLogo.svg";

function DashBoardPassenger() {
  const name = "Chibuzor";
  return (
    <>
      <div className="container-fluid w-25 vh-100 p-4" id="dashBoardSide">
        <div className="">
          <img
            src={ProfileImg}
            alt=""
            className="bg-light mb-4"
            id="profileImg"
          />
          <h3>Welcome {name}</h3>
        </div>
        <div id="dashboardFields">
          <div id="profile">
            <img src={profileLogo} alt="" />

            <a href="#">
              <p>Profile</p>
            </a>
          </div>
          <div id="bookRide">
            <img src={bookRideLogo} alt="" />
            <a href="#">
              {" "}
              <p>Book Ride</p>
            </a>
          </div>
          <div id="rideHistory">
            <img src={rideHistoryLogo} alt="" />
            <a href="#">
              <p>Ride History</p>
            </a>
          </div>
          <div id="notification">
            <img src={notificationLogo} alt="" />
            <a href="#">
              <p>Notification</p>
            </a>
          </div>
          <div id="logout">
            <img src={logoutLogo} alt="" />
            <a href="#">
              <p>Logout</p>
            </a>
          </div>
        </div>
      </div>
      <div>
        <img
          src={map}
          alt=""
          style={{ width: "75%", height: "100vh", objectFit: "cover" }}
        />
      </div>
    </>
  );
}

export default DashBoardPassenger;
