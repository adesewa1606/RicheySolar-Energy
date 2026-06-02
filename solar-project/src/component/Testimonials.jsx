import "../component/Testimonials.css";

const Testimonials = () => {
    return (
        <section className="testimonials">

            <h2>What Clients Say</h2>

            <div className="testimonial-container">

                <div className="testimonial-card">
                    <p>
                        Excellent solar installation and professional service.
                    </p>
                    <h4>- Michael</h4>
                </div>
                <div className="testimonial-card">
                    <p>
                        The quality is excellent and the support team was responsive and helpful throughout the process.
                    </p>
                    <h4>- Maki Joe</h4>
                </div>
                <div className="testimonial-card">
                    <p>
                        They have amazing customer support and I loved the way the team handled every request promptly.
                    </p>
                    <h4>- Joe Doe</h4>
                </div>

                <div className="testimonial-card">
                    <p>
                        Their CCTV systems are reliable and very affordable.
                    </p>
                    <h4>- Sarah</h4>
                </div>

            </div>

        </section>
    );
};

export default Testimonials;
