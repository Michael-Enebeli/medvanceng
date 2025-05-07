import React from "react";
import Slider from "react-slick";
import "../styles/Testimonials.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const testimonials = [
    {
        id: 1,
        user: "User One",
        image: "/images/testimonial-icon.png",
        text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id: 2,
        user: "User Two",
        image: "/images/testimonial-icon.png",
        text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id: 3,
        user: "User Three",
        image: "/images/testimonial-icon.png",
        text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id: 4,
        user: "User Four",
        image: "/images/testimonial-icon.png",
        text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
];


function PrevArrow({ onClick }) {
    return (
        <button className="arrow prev" onClick={onClick}>
            <i className="fa-solid fa-chevron-left"></i>
        </button>
    );
}

function NextArrow({ onClick }) {
    return (
        <button className="arrow next" onClick={onClick}>
            <i className="fa-solid fa-chevron-right"></i>
        </button>
    );
}

export default function Testimonials() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        appendDots: (dots) => (
            <div className="custom-dots-wrapper">
                <ul className="custom-dots">{dots}</ul>
            </div>
        ),
        customPaging: () => <div className="custom-dot" />,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <article className="testimonial-wrapper">
            <section className="testimonial-header">
                <span>Testimonial</span>
                <h2>Here's What Our Users Have To Say About Us</h2>
            </section>

            <section className="testimonial-slider">
                <Slider {...settings}>
                    {testimonials.map((item) => (
                        <div key={item.id} className="testimonial-slide">
                            <div className="testimonial-card">
                                <img src="/images/quoteMark.png" alt="quote" className="quote-icon" />
                                <p className="testimonial-text">{item.text}</p>
                                <div className="testimonial-user">
                                    <img src={item.image} alt={item.user} />
                                    <p>{item.user}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </section>
        </article>
    );
}
