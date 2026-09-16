import "../styles/hero.css";
import { FaGithub, FaLinkedin,  FaEnvelope} from "react-icons/fa";
import profileImage from "../assets/profile.jpeg";

function Hero() {
    return (
        <section className="hero">
            <div className="hero-content">
                
           <p>CHRISTCHURCH, NEW ZEALAND</p>

            <h1>
                Data & Business Intelligence Analyst
            </h1>

            <p>
                Turning complex data into clear insights, automated reports, and practical data solutions.
            </p>

            <div className="hero-buttons">
                <a href="#projects" className="primary-button">
                    View Projects
                </a>

                <a href="/resume.pdf" className="secondary-button">
                    Dowload CV
                </a>
            </div>

            <div className="hero-stat">

                <div className="stat">
                    <strong>Master's</strong>
                    <span>Applied Data Science</span>
                    <span>University of Canterbury</span>
                </div>

                <div className="stat">
                    <strong>PHF Science</strong>
                    <span>Industry Experience</span>
                </div>
                <div className="stat">
                    <strong>AZ-900</strong>
                    <span>Microsoft Certified</span>
                </div>

                <div className="stat">
                    <strong>NZ Permanent Resident</strong>
                    <span>Full Work Rights</span>
                </div>

            
            </div>

        </div>


            <div className="hero-image">
                <img src={profileImage} alt="Profile" />

                <div className="image-info">
                    <strong>Anju Sambasivan</strong>
                    <span>Data & BI Analyst</span>
                </div>

                <div className="hero-socials">
                    <a href="https://github.com/AnjuSambasivan93/anju_data_analyst"><FaGithub />GitHub</a>

                    <a href="https://www.linkedin.com/in/anjusambasivan/"><FaLinkedin/>LinkedIn</a>

                    <a href="aanju9363@gmail.com"><FaEnvelope/>Email</a>
                </div>
            </div>

        </section>
    );
}

export default Hero;