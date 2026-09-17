import "../styles/experience.css";

function Experience() {
    return (
        <section id="experience" className="experience">
            <p className="section-number">EXPERIENCE</p>

            <div className="experience-item">

                <div className="experience-header">
                    <div>
                        <h3>Data Scientist</h3>
                        <h4>PHF Science</h4>
                    </div>
                    <span>Jan 2026 - July 2026</span>
                </div>

                <p>Developed a Microsoft Word Add-in that enables researchers to create and refresh
    public health and community wellbeing reports with data, tables, charts, maps,
    and AI-assisted content directly in Word.
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
    Built a Community Health and Wellbeing Reporting Platform using Python ETL pipelines
    to clean, transform, and combine multiple datasets, enabling automated analysis and
    report generation for Territorial Authorities across New Zealand.
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