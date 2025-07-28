import React from "react";
import NavBar from "../components/NavBar";
import About from "../components/About";
import Qualities from "../components/Qualities";
import Menu from "../components/Menu";
import WhoArewe from "../components/WhoArewe";
import Team from "../components/Team";
import Reservation from "../components/Reservation";
import Footer from "../components/Footer";

const Abouts = () => {
  return (
    <>
      <section className="heroSection" id="heroSection">
        <NavBar />
      </section>
      <section className="aboutsection">
        <About />
      </section>
       <Qualities/>
   
      <WhoArewe/>
      <Team/>
      <Footer/>
    </>
  );
};

export default Abouts;
