import "../component/Hero.css";
import { useEffect, useState } from "react";

const Hero = () => {

    const images = [

        "https://images.unsplash.com/photo-1509391366360-2e959784a276",

        "https://images.unsplash.com/photo-1497440001374-f26997328c1b",

        "https://images.unsplash.com/photo-1518770660439-4636190af475",

        "https://images.unsplash.com/photo-1558002038-1055907df827",
    ];

    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {

        const slider = setInterval(() => {

            setCurrentImage((prev) =>
                prev === images.length - 1 ? 0 : prev + 1
            );

        }, 4000);

        return () => clearInterval(slider);

    }, [images.length]);

    return (

        <section
            id="home"
            className="hero"
            style={{
                backgroundImage: `url(${images[currentImage]})`,
            }}
        >

            <div className="overlay"></div>

            <div className="hero-content">

                <h1>
                    Smart Solar <br />
                    Energy Solutions
                </h1>

                <p>
                    Solar installation, CCTV surveillance
                    and smart automation systems.
                </p>

                <div className="hero-buttons">

                    <button
                        className="primary-btn"
                        onClick={() => {
                            document.getElementById("shop").scrollIntoView({ behavior: "smooth" });
                        }}
                    >
                        Get Started
                    </button>

                    <button
                        className="secondary-btn"
                        onClick={() => {
                            document.getElementById("services").scrollIntoView({ behavior: "smooth" });
                        }}
                    >
                        Learn More
                    </button>

                </div>

            </div>

        </section>
    );
};

export default Hero;