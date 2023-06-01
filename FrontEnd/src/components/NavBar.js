import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="sticky-top">
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        style={{ backgroundColor: "#008080" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#" id="app-name">
            <span className="text-white">C</span>ommute
            <span className="text-white">S</span>hare
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse d-flex justify-content-end "
            id="navbarNav"
          >
            <ul className="navbar-nav" id="nav-ul">
              <li className="nav-item m-4 ">
                <Link className="nav-link active " aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item m-4">
                <a className="nav-link text-white" href="#">
                  Book Ride
                </a>
              </li>
              <li className="nav-item  m-4">
                <a className="nav-link text-white" href="#">
                  Join Ride
                </a>
              </li>
              <li className="nav-item  m-4">
                <a className="nav-link text-white" href="#">
                  Our Services
                </a>
              </li>
            </ul>
            <Link to="/SignUp">
              <button
                style={{ backgroundColor: "#339999" }}
                className="rounded border-0 p-2 px-4 m-5 "
                id="nav-btn"
                onClick={() => console.log("clicked")}
              >
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
