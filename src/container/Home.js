import React from "react";
import Header from "../components/Header";
import Body from "../components/Body";
import Services from "../components/Services";
import Success from "../components/Success";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="">
      <Header />
      <Body />
      <Services />
      {/* <Success /> */}
      <Footer />
    </div>
  );
}

export default Home;
