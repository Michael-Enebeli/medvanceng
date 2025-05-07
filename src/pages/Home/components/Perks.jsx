import React from "react";
import "../styles/Perks.css"; 

const whyMedvanace = [
  {
    id: 1,
    number: 1,
    title: "Teleconsultation Integration",
    content: "Get access to doctors for online consultations when needed.",
  },
  {
    id: 2,
    number: 2,
    title: "Swift Doorstep Delivery",
    content: "Get timely access to prescribed medications.",
  },
  {
    id: 3,
    number: 3,
    title: "Verified Sources",
    content:
      "Get access to medications that meet regulatory standards, are authentic, and safe.",
  },
  {
    id: 4,
    number: 4,
    title: "Prescription Management",
    content: "Upload your prescriptions and get refills on time.",
  },
  {
    id: 5,
    number: 5,
    title: "Wide Medication Availability",
    content:
      "Get access to a broad selection of medicines, including rare and speciality drugs.",
  },
];

export default function Perks() {
  return (
    <>
      <main className="perks-header" itemScope itemType="https://schema.org/MedicalOrganization">
        <section className="perks-intro">
          <div className="perks-heading">
            <span className="perks-tag">
              <p>perks</p>
            </span>
            <h1 itemProp="name">Why Medvance?</h1>
          </div>
          <div className="perks-description">
            <p itemProp="description">
              At <span className="highlight" itemProp="legalName">Medvance</span>, we understand
              that access to medical care can be challenging. Our platform
              provides easy access to doctors, medications, prescription
              interpretation, and counseling, even for urgent concerns.
            </p>
          </div>
        </section>

        <section className="perks-image">
          <figure>
            <img
              src="/images/whyImg.png"
              alt="Doctor providing telemedicine consultation through Medvance platform"
              loading="lazy"
              width="342"
              height="239"
              itemProp="image"
            />
          </figure>
        </section>
      </main>

      <main className="perks-main">
        <figure className="perks-mockup">
          <img
            src="/images/Mockup.png"
            alt="Medvance mobile app interface showing healthcare features"
            loading="lazy"
            width="235"
            height="480"
          />
        </figure>

        <section className="perks-list">
          {whyMedvanace.map((why) => (
            <div
              key={why.id}
              className="perk-card"
              itemProp="makesOffer"
              itemScope
              itemType="https://schema.org/Offer"
            >
              <div className="perk-number">
                <p>{why.number.toString().padStart(2, "0")}</p>
              </div>
              <div className="perk-content">
                <h2 itemProp="name">{why.title}</h2>
                <p itemProp="description">{why.content}</p>
              </div>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}
