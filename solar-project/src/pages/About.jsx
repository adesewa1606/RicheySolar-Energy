import "../pages/About.css";

const About = () => {
    return (
        <section className="about">
            <div className="about-image">
                <img
                    src="https://images.unsplash.com/photo-1509391366360-2e959784a276"
                    alt="Solar panel installation by RicheySolar"
                />
            </div>

            <div className="about-content">
                <h2>About RicheySolar Energy</h2>

                <p>
                    We provide premium solar energy, CCTV surveillance and
                    smart home automation systems designed for modern homes
                    and businesses.
                </p>

                <p>
                    At RicheySolar, we are committed to delivering
                    sustainable and cost-effective energy solutions that
                    reduce your carbon footprint while saving you money. Our
                    team of certified technicians ensures professional
                    installation and ongoing support for every project.
                </p>

                <p>
                    From residential rooftop solar panels to large-scale
                    commercial installations, we tailor every system to meet
                    your specific energy needs. We also offer advanced CCTV
                    security systems and smart automation to make your home
                    or business safer and more efficient.
                </p>
            </div>
        </section>
    );
};

export default About;
