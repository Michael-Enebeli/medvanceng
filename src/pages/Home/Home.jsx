import React from "react";
import Header from "./components/Header";
import MedvanceServices from "./components/MedvanceServices";
import Perks from "./components/Perks";
import Physio from "./components/Physio";
import BridgeGap from "./components/BridgeGap";
import Testimonials from "./components/Testimonials";
import Faq from "./components/Faq";
import StayInformed from "../../global/components/StayInformed";
import Footer from "../../global/components/Footer";

const Home = () => {
  return <>
    <Header />
    <MedvanceServices />
    <Perks />
    <Physio />
    <BridgeGap />
    <Testimonials />
    <Faq />
    <StayInformed />
    <Footer />
  </>;
};

export default Home;
