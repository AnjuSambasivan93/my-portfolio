import "../styles/experience.css";

function Experience() {
    return (
        <section id="experience" className="experience">
            <p className="section-number">Experience</p>

            <div className="experience-item">

                <div className="experience-header">
                    <div>
                        <h3>Data Scientist</h3>
                        <h4>PHF Science</h4>
                    </div>
                    <span>Jan 2026 - June 2026</span>
                </div>

                <p>Developed an AI-powered reporting platform that helped
                    researchers automatically create public health and community wellbeing reports from data.
                </p>

                <div className="experience-tools">
                    <span>React</span>
                    <span>TypeScript</span>
                    <span>Node.js</span>
                    <span>PostgreSQL</span>
                    <span>Office.js</span>
                    <span>LLMs</span>
                </div>
            </div>


            <div className="experience-item">
                <div className="experience-header">
                    <div>
                        <h3>Data Science Research Intern</h3>
                        <h4>PHF Science</h4>
                    </div>

                    <span>July 2025 - Jan 2026</span>
                </div>

                <p>
                    Developed a Community Health and Wellbeing Reporting Platform to automate data analysis and
                    reporting across New Zealand.
                </p>

                <div className="experience-tools">
                    <span>Python</span>
                    <span>Pandas</span>
                    <span>Numpy</span>
                    <span>Geopandas</span>
                    <span>ETL</span>
                    <span>Spatial Analysis</span>
                </div>
            </div>



            <div className="experience-item">
                <div className="experience-header">
                    <div>
                        <h3>Data Analyst Intern</h3>
                        <h4>MVP Studio</h4>
                    </div>

                    <span>Mar 2024 - Jul 2024</span>
                </div>

                <p>
                    Developed a Business Intelligence solution to analyse Australian property, location and school data using 
                    data warehousing, ETL and interactive dashboards.
                </p>

                <div className="experience-tools">
                    <span>SQL Server</span>
                    <span>SSIS</span>
                    <span>Power BI</span>
                    <span>DAX</span>
                    <span>ETL</span>
                    <span>Data Warehousing</span>
                </div>
            </div>
        </section>
    )

}

export default Experience;