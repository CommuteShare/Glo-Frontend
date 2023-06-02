import React from "react";
import CelebrationImage5 from "../assets/CelebrationImage5.png";
import VerifiedImage from "../assets/VerifiedImage.svg";
import CelebrationImage from "../assets/CelebrationImage.png";
import CelebrationImage4 from "../assets/CelebrationImage4.png";
import CelebrationImage3 from "../assets/CelebrationImage3.png";
import CelebrationImage2 from "../assets/CelebrationImage2.png";
import axios from "axios";

function Success() {
  return (
    <>
      <div className="main-div">
        <>
          <div className="heading">
            <h1>Success!</h1>
            <p>
              Your ride has been approved. You can <br />
              now join the ride
            </p>
          </div>

          <div className="celebrationImages">
            <span className="celebrationImageGreen">
              <img src={CelebrationImage5} />
            </span>
            <span className="verified-image">
              <img src={VerifiedImage} />
            </span>
            <span className="celebrationImageGreen2">
              <img src={CelebrationImage5} />
            </span>
          </div>

          <div className="celebrationImages2">
            <img src={CelebrationImage} />
            <img src={CelebrationImage4} />
          </div>

          <div className="celebrationImages3">
            <img src={CelebrationImage3} className="image3" />
            <img src={CelebrationImage2} />
          </div>
        </>
      </div>
    </>
  );
}

export default Success;
