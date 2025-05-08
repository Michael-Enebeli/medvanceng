import React from "react";
import AboutHero from "./components/AboutHero";
import AboutMedvance from "./components/AboutMedvance";
import Vision from "./components/Vision";
import Bridge from "./components/Bridge";
import Footer from "../../global/components/Footer";

const About = () => {
  return <>
    <AboutHero />
    <AboutMedvance />
    <Vision />
    <Bridge />
    <Footer />
  </>;
};

export default About;
