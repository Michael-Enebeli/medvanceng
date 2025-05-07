import React, { useState } from "react";
import "../styles/StayInformed.css";

export default function StayInformed() {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setEmail(e.target.value);
        if (error) setError("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError("Please enter a valid email address.");
            return;
        }

        setLoading(true);
        setError("");

        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            });

            if (response.ok) {
                alert("Thanks for subscribing!");
                setEmail("");
            } else {
                setError("Something went wrong. Please try again.");
            }
        } catch (error) {
            setError("Network error. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="stay-wrapper">
            <div>
                <h2>Stay Healthy. Stay Informed.</h2>
                <p>
                    Unlock trusted health advice, simple tips, and stay updated on the latest upgrades.
                </p>

                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Enter your email"
                        value={email}
                        onChange={handleChange}
                        disabled={loading}
                    />
                    <button type="submit" disabled={loading}>
                        {loading ? "Submitting..." : "Subscribe"}
                    </button>
                </form>

                {error && <span>{error}</span>}
            </div>
        </section>
    );
}
