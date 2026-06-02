import Hero from "../component/Hero";
import Services from "./Services";
import Stats from "../component/Stats";
import About from "./About";
import Projects from "../component/Projects";
import Shop from "./Shop";
import Testimonials from "../component/Testimonials";
import Contact from "./Contact";
import FAQ from "../component/Faq/FAQ";

const HomePage = () => {
    return (
        <>
            <Hero />
            <Services />
            <Stats />
            <About />
            <Projects />
            <Shop />
            <Testimonials />
            <Contact />
            <FAQ />
        </>
    );
};

export default HomePage;
