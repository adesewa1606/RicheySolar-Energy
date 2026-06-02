import "../component/Stats.css";

const Stats = () => {

    return (

        <section className="stats-section">

            <div className="stats-heading">

                <h2>Our Achievements</h2>

                <p>
                    Trusted solar energy solutions with years of excellence
                </p>

            </div>

            <div className="stats-container">

                <div className="stats-card">

                    <h1>14K+</h1>
                    <p>Installations</p>

                </div>

                <div className="stats-card">

                    <h1>10K+</h1>
                    <p>Happy Clients</p>

                </div>

                <div className="stats-card">

                    <h1>8+</h1>
                    <p>Years Experience</p>

                </div>

            </div>

        </section>

    );

};

export default Stats;