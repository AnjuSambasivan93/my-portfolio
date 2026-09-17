import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Education from "./sections/Education";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import FeaturedProjects from "./sections/FeaturedProjects";

function App(){
  return (
    <>
    <Navbar />
    <Hero />
    <About />
    <FeaturedProjects />
    <Skills />
    <Experience />
    <Projects />
    <Education />
    <Contact />
    <Footer />
    </>
  );
}

export default App;