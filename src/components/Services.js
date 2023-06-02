import React from "react";
import NavBar from "./NavBar";
import AfordableRide from "../assets/AffordableRide.svg";
import RideSharing from "../assets/RideSharing.svg";
import TrafficSurveillance from "../assets/TrafficSurveillance.svg";

function Services() {
  return (
    <>
      <NavBar />
      <div className="main-div">
        <>
          <div className="ride-sharing">
            <div className="ridesharing-image">
              <img src={RideSharing} />
            </div>
            <div className="paragraph1">
              <h1>
                Our <span className="s">S</span>ervices
              </h1>

              <h2 className="ride-sharing-heading">
                Ride <span className="letter-s">S</span>haring
              </h2>
              <p>
                We are dedicated to serving the hardworking individuals of our
                community, and we are proud to offer exclusive ride-sharing
                services tailored specifically for working-class people. Our
                team of skilled drivers is committed to providing a comfortable
                and efficient experience, ensuring that you arrive at your
                destination on time and without any hassle. With our
                user-friendly app and transparent pricing, you can easily book
                rides and track expenses, making your transportation needs a
                breeze. Join us today and enjoy the convenience and
                affordability of our ride-sharing services designed with the
                working class in mind.
              </p>
            </div>
          </div>

          <div className="affordable-ride">
            <div className="affordable-ride-image">
              <img src={AfordableRide} />
            </div>

            <div className="paragraph2">
              <h2 className="affordable-ride-heading">
                Affordable <span className="letter-r">R</span>ide
              </h2>
              <p>
                Our mission is to provide reliable transportation solutions that
                won't break the bank. With our competitive pricing and
                cost-effective ride-sharing services, you can commute to work,
                run errands, or attend appointments without worrying about
                excessive expenses. We believe that everyone deserves access to
                reliable transportation, and our dedicated drivers are committed
                to ensuring a comfortable and budget-friendly experience. Join
                our community of working-class customers and let us take care of
                your transportation needs affordably and reliably.
              </p>
            </div>
          </div>

          <div className="traffic-surveillance">
            <div className="traffic-surveillance-image">
              <img src={TrafficSurveillance} />
            </div>

            <div className="paragraph3">
              <h2 className="traffic-surveillance-heading">
                Traffic <span className="letter-S">S</span>urveillance
              </h2>
              <p>
                Introducing our exclusive traffic surveillance ride service,
                tailored specifically for our hardworking customers. We
                understand the frustration and time wasted in traffic jams,
                which is why we offer a unique solution to help you navigate
                through congested roads more efficiently. Our skilled drivers
                are equipped with real-time traffic updates and advanced
                navigation tools to find the quickest routes for your daily
                commute.
              </p>
            </div>
          </div>
        </>
      </div>
    </>
  );
}

export default Services;
