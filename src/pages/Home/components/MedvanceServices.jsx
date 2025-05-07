import React from "react";
import "../styles/MedvanceServices.css";

const medvanceServices = [
    {
        id: 1,
        icon: "/images/Vector(1).png",
        title: "Telemedicine Consultations",
        content:
            "Speak with licensed doctors online from the comfort of your home.",
    },
    {
        id: 2,
        icon: "/images/Group.png",
        title: "Medication Sourcing",
        content:
            "Get access to authentic medicines from reliable manufacturers or pharmacies.",
    },
    {
        id: 3,
        icon: "/images/Group(1).png",
        title: "Prescription Interpretation",
        content: "In case of unclear handwriting or terms misinterpretation, get access to accurate medications and instructions from medical professionals.",
    },
    {
        id: 4,
        icon: "/images/Group(2).png",
        title: "Medication Therapy Counseling",
        content: "Receive guidance on dosage, possible side effects, interactions with other drugs, and lifestyle tips to improve treatment effectiveness.",
    },
    {
        id: 5,
        icon: "/images/child-icon.png",
        title: "Preventive and Wellness Programs",
        content: "Stay ahead of your health with expert wellness guide.",
    },
];

export default function MedvanceServices() {
    return (
        <main className="medvance-main">
            <section className="medvance-section">
                <div className="medvance-header">
                    <span>Our Services</span>
                    <h2>Comprehensive Healthcare, Just a Click Away</h2>
                </div>

                <div className="services-container">
                    {medvanceServices.slice(0, 3).map((service) => (
                        <div key={service.id} className="service-card">
                            <span className="icon-wrapper">
                                <img src={service.icon} alt={`${service.title} icon`} />
                            </span>
                            <div className="text-content">
                                <h3>{service.title}</h3>
                                <p>{service.content}</p>
                            </div>
                        </div>
                    ))}

                    <div className="last-two-wrapper">
                        {medvanceServices.slice(3).map((service) => (
                            <div key={service.id} className="service-card">
                                <span className="icon-wrapper">
                                    <img src={service.icon} alt={`${service.title} icon`} />
                                </span>
                                <div className="text-content">
                                    <h3>{service.title}</h3>
                                    <p>{service.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </section>
        </main>
    );
}