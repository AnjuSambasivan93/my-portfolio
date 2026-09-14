import "../styles/hero.css";
import profileImage from "../assets/profile.jpeg";

function Hero() {
    return (
        <section className="hero">
            <div className="hero-content">
            <p>Based in Christchurch, New Zealand</p>

            <h1>
                Data Analyst & Data Scientist
            </h1>

            <p>
                I turn complex data into clear insights and useful data solutions.
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