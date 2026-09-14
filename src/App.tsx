import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";

function App(){
  return (
    <>
    <Navbar />
    <Hero />
    <About />
    <Skills />
    <Experience />
    </>
  );
}

export default App;