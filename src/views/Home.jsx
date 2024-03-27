import Header from "../components/Header.jsx";
import Hero from "../components/Hero.jsx";
import About from "../components/About.jsx";
import Services from "../components/Services.jsx";
import Works from "../components/Works.jsx";
import Testimonials from "../components/Testimonials.jsx";
import Blog from "../components/Blog.jsx";
import Contact from "../components/Contact.jsx";

const Home = () => {
    return (
        <main>
            <Hero/>
            <About/>
            <Services/>
            <Works/>
            <Testimonials/>
            <Blog/>
            <Contact />
        </main>
    );
};

export default Home;