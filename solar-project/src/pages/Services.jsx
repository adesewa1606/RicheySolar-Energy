import { useState } from "react";
import "../pages/Services.css";
import servicesData from "../data/ServiceData";

const Services = () => {

    const [expanded, setExpanded] = useState(null);

    const toggleExpand = (index) => {
        setExpanded(expanded === index ? null : index);
    };

    return (

        <section id="services" className="services">

            <div className="section-title">

                <h2>Our Services</h2>

                <p>
                    Smart energy and security solutions tailored
                    for modern living.
                </p>

            </div>

            <div className="services-container">

                {servicesData.map((service, index) => (

                    <div
                        className={`service-card${expanded === index ? " expanded" : ""}`}
                        key={index}
                    >

                        <div className="service-icon-box">
                            {service.icon}
                        </div>

                        <h3>{service.title}</h3>

                        <p>{service.description}</p>

                        {expanded === index && (
                            <div className="service-details">
                                <p>{service.details}</p>
                            </div>
                        )}

                        <button
                            className="service-btn"
                            onClick={() => toggleExpand(index)}
                        >
                            {expanded === index ? "Show Less" : "Learn More"}
                        </button>

                    </div>

                ))}

            </div>

        </section>
    );
};

export default Services;