import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="sticky-top">
      <nav
        class="navbar navbar-expand-lg bg-body-tertiary"
        style={{ backgroundColor: "#008080" }}
      >
        <div class="container-fluid">
          <a class="navbar-brand" href="#" id="app-name">
            <span className="text-white">C</span>ommute
            <span className="text-white">S</span>hare
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse d-flex justify-content-end "
            id="navbarNav"
          >
            <ul class="navbar-nav p-2 " id="nav-ul">
              <li class="nav-item m-4 ">
                <Link class="nav-link active " aria-current="page" to="/">Home</Link>
              </li>
              <li class="nav-item m-4">
                <a class="nav-link text-white" href="#">
                  Book Ride
                </a>
              </li>
              <li class="nav-item  m-4">
                <a class="nav-link text-white" href="#">
                  Join Ride
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
