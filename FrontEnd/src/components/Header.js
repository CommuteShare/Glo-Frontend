import React, { useState } from "react";
import BgImage from "../assets/car-7614510.jpg";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <NavBar />
      <img src={BgImage} alt="" className=" w-100" id="BgImage" />
      <div className="container h-auto p-3 bg-light header-msg" id="header-msg">
        <div id="header-sub-msg">
          <ul id="sub-msg-ul">
            <a href="#">
              {" "}
              <li>Drive</li>
            </a>
            <a href="#">
              <li>Work</li>
            </a>
            <a href="#">
              <li>Earn</li>
            </a>
          </ul>
        </div>
          <div id="header-text">
            <h2> Get more income</h2>
            <h2>with</h2>
            <h2>CommuteShare</h2>
            <p id="header-text-2">Drive with us and earn extra income</p>
            <Link to="SignUp">
              <button
                className="rounded border-0 p-2 px-4 m-4"
                id="img-btn"
                style={{ backgroundColor: "#339999" }}
              >
                Sign up to drive
              </button>
            </Link>
          </div>
      </div>
    </div>
  );
}

export default Header;
