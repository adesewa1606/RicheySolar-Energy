import "../component/Projects.css";
import projectData from "../data/ProjectData";

const Projects = () => {

    return (

        <section id="projects" className="projects">

            <div className="section-title">

                <h2>Our Projects</h2>

                <p>
                    Explore some of our recent solar and smart automation projects.
                </p>

            </div>

            <div className="project-grid">

                {projectData.map((project, index) => (

                    <div
                        className="project-card"
                        key={index}
                    >

                        <img
                            src={project.image}
                            alt={project.title}
                        />

                        <div className="project-overlay">

                            <h3>{project.title}</h3>

                            <button onClick={() => window.open(project.image, "_blank")}>
                                View Project
                            </button>

                        </div>

                    </div>

                ))}

            </div>

        </section>
    );
};

export default Projects;