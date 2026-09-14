import "../styles/experience.css";

function Experience() {
    return (
        <section id="experience" className="experience">
            <h2>Experience</h2>

            <div className="experience-item">
                <h3>Data Scientist</h3>
                <h4>PHF Science</h4>
                <p className="date">Jan 2026 - Jun 2026 | Christchurch</p>

                <p>Worked on data analysis, automated reporting and data-driven
                     research solutions using Python, SQL and web technologies</p>
            </div>



            <div className="experience-item">
                <h3>Data Science Research Intern</h3>
                <h4>PHF Science</h4>
                <p className="date">July 2025 - Jan 2026 | Christchurch</p>
                <p>Worked with public health, Census, and environmental datsets
                   to create reusable data processing and reporting solutions.
                </p>
            </div>



        </section>
    )
}

export default Experience;