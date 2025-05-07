import "../styles/Physio.css";
import { useNavigate } from "react-router-dom";

export default function Physio() {
    const navigate = useNavigate();
    const handleBookNow = () => {
        navigate("/signup");
    };


    return (
        <main className="physio-container">
            <section>
                <h2>Your Physio Session is Just a Click Away</h2>
                <p>
                    Locate your nearest hospital, schedule a physiotherapy session in
                    seconds, and let your aches take backseat.
                </p>
                <button onClick={handleBookNow}>Book Now</button>
            </section>
        </main>
    );

}
