import "../styles/hero.css";
import profileImage from "../assets/profile.jpeg";

function Hero() {
    return (
        <section className="hero">
            <div className="hero-content">
           

            <h1>
                Data & Business Intelligence Analyst
            </h1>
             <p>Based in Christchurch, New Zealand</p>

            <p>
                Turning complex data into clear insights, automated reports, and practical data solutions.
            </p>

            <div>
                <a href="#projects">View Projects</a>
                <a href="/resume.pdf">Dowload CV</a>
            </div>
            </div>


            <div className="hero-image">
                <img src={profileImage} alt="Profile" />
            </div>

        </section>
    );
}

export default Hero;