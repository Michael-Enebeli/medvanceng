import React from "react";
import AboutHero from "./components/AboutHero";
import AboutMedvance from "./components/AboutMedvance";
import Vision from "./components/Vision";
import Bridge from "./components/Bridge";
import StayInformed from "../../global/components/StayInformed";
import Footer from "../../global/components/Footer";

const About = () => {
  return <>
    <AboutHero />
    <AboutMedvance />
    <Vision />
    <Bridge />
    <StayInformed />
    <Footer />
  </>;
};

export default About;
