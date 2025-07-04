import React from "react";
import PharmacyHero from "./components/PharmacyHero";
import PharmacyUI from "./PharmacyUI";
import Footer from "../../global/components/Footer";
import WhatsAppEmailIcons from "./components/WhatsAppEmailIcons";
import StayInformed from "../../global/components/StayInformed";


const Pharmacy = () => {
  return <>
    <PharmacyHero />
    <PharmacyUI />
    <StayInformed />
    <WhatsAppEmailIcons />
    <Footer />
    </>;
};

export default Pharmacy;
