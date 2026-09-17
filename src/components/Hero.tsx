import "../styles/hero.css";
import { FaGithub, FaLinkedin,  FaEnvelope} from "react-icons/fa";
import profileImage from "../assets/profile.jpg";

function Hero() {
    return (
        <section className="hero">
            <div className="hero-content">
            
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

                <a href="/ANJU_SAMBASIVAN_CV_Data_Analytics_09_2026.pdf" target="_blank" rel="noopener noreferrer" className="secondary-button">
                View CV</a>

                <a href="/ANJU_SAMBASIVAN_CV_Data_Analytics_09_2026.pdf" download className="secondary-button">
                    Download CV
                </a>
            </div>

            <div className="hero-stat">

                <div className="stat">
                    <strong>Master's</strong>
                    <span>Applied Data Science</span>
                    <span>University of Canterbury</span>
                </div>

                <div className="stat">
                    <strong>Public Health and Forensic Science</strong>
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

            <p className="hero-note">
                Christchurch, New Zealand  · Open to relocation
            </p>

        </div>


            <div className="hero-image">
                <img src={profileImage} alt="Profile" />

                

                <div className="hero-socials">
                    <a href="https://github.com/AnjuSambasivan93/anju_data_analyst" target="_blank" rel="noopener noreferrer"><FaGithub />GitHub</a>

                    <a href="https://www.linkedin.com/in/anjusambasivan/" target="_blank" rel="noopener noreferrer"><FaLinkedin/>LinkedIn</a>

                    <a href="mailto:aanju9363@gmail.com"><FaEnvelope/>Email</a>
                </div>
            </div>

        </section>
    );
}

export default Hero;