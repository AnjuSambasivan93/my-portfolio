import "../styles/skills.css";

function Skills() {
    return (
        <section id="skills" className="skills">
            <p className="section-number">SKILLS</p>
            <h2>Tools & Technologies</h2>

            <div className="skills-grid">

                <div className="skill-group">
                    <h3>Data & Analytics</h3>

                    <div className="skill-list">
                        <span>Python</span>
                        <span>SQL</span>
                        <span>Power BI</span>
                        <span>Pandas</span>
                        <span>Geopandas</span>
                        <span>Data Visualisation</span>
                    </div>
                </div>


                <div className="skill-group">
                    <h3>BI & Data Engineering</h3>

                    <div className="skill-list">
                        <span>ETL</span>
                        <span>Data Modelling</span>
                        <span>Data Warehousing</span>
                        <span>PostgreSQL</span>
                        <span>SQL Server</span>
                    </div>
                </div>

                <div className="skill-group">
                    <h3>Development</h3>
                    
                    <div className="skill-list">
                        <span>React</span>
                        <span>TypeScript</span>
                        <span>Node.js</span>
                        <span>Express.js</span>
                        <span>REST APIs</span>
                    </div>
                </div>


                <div className="skill-group">
                    <h3>Cloud & Tools</h3>

                    <div className="skill-list">
                        <span>Azure</span>
                        <span>Git</span>
                        <span>GitHub</span>
                        <span>Jupyter</span>
                        <span>VS Code</span>

                    </div>
                </div>

                <div className="skill-group">
                    <h3>Data Science</h3>

                    <div className="skill-list">
                        <span>Machine Learning</span>
                        <span>Statistical Analysis</span>
                        <span>Spatial Analysis</span>
                        <span>Numpy</span>
                    </div>
                </div>

                <div className="skill-group">
                    <h3>Currently Learning</h3>

                    <div className="skill-list">
                        <span>Azure Data Engineering</span>
                        <span>Docker</span>
                        <span>CI/CD</span>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Skills;