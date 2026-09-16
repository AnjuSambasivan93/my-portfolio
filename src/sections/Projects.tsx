import "../styles/projects.css";

function Projects() {
    return (
        <section id="projects" className="projects">
            <p className="section-number">PROJECTS</p>

            <div className="project-grid">

                <div className="project-card">
                    <span className="project-number">01</span>
                    <h3>Community Health & Wellbeing Platform</h3>
                    <p className="project-company">PHF Science</p>
                    <h4>Situation</h4>
                    <p>
                        Public health and Community data came from multiple datasets
                         and geographic levels across New Zealand.
                    </p>

                    <h4>Task</h4>
                    <p>
                        Create a reusable process to analyse community wellbeing indicators and automate reporting.
                    </p>
                    <h4>Action</h4>
                    <p>Built Python ETL pipelines, calculated indicators, 
                       performed spatial analysis and automated report creation
                    </p>

                    <h4>Result</h4>
                    <p>
                        Developed a reusable platform for data processing, visualisation
                         and Community Health and Wellbeing profiles.
                    </p>

                    <div className="project-tools">
                        <span>Python</span>
                        <span>Pandas</span>
                        <span>Geopandas</span>
                        <span>Numpy</span>
                        <span>ETL</span>
                    </div>

                    <a href="#" className="project-link">
                        View Project
                    </a>

                </div>

                <div className="project-card">
                    <span className="project-number">02</span>

                    <h3>AI-Powered Reporting Platform</h3>
                    <p className="project-company">PHF Science</p>

                    <h4>Situation</h4>
                    <p>
                        Researchers needed an easier way to create reports containing data, charts, maps and analytical content.
                    </p>

                    <h4>Task</h4>
                    <p>
                        Build a reporting solutions that could generate and refresh data-driven content directly in Microsoft Word.
                    </p>
                    <h4>Action</h4>
                    <p>
                        Build a Word Add-in with React and TypeScript, REST APIs with Node.js and Express.js,
                         and integrated PostgreSQL data and LLM-generated content.
                    </p>

                    <h4>Result</h4>
                    <p>
                        Created an automated reporting platform capable of generating statistics, tables, charts, maps
                        and AI-assisted reporting content.
                    </p>

                    <div className="project-tools">
                        <span>React</span>
                        <span>TypeScript</span>
                        <span>Node.js</span>
                        <span>PostgreySQL</span>
                        <span>Office.js</span>
                    </div>

                    <a href="#" className="project-link">
                        View Project
                    </a>
                </div>

                <div className="project-card">
                    <span className="project-number">03</span>
                    <h3>Property Business Intelligence Solution</h3>
                    <p className="project-company">MVP Studio</p>
                    <h4>Situation</h4>

                    <p>
                        Property, location and school inforamtion was stored across different CSV and Excel datasets.
                    </p>

                    <h4>Task</h4>
                    <p>
                        Create a Business Intellgence solution for analysing Australian property data.
                    </p>
                    <h4>Action</h4>
                    <p>
                        Built a SQL Server data warehouse, developed SSIS ETL pipelines and created a Power BI model with DAX measures.
                    </p>

                    <h4>Result</h4>
                    <p>
                        Developed intercative dashboards for analysing property
                         values by city, suburb, postcode and value category.
                    </p>

                    <div className="project-tools">
                        <span>SQL Server</span>
                        <span>SSIS</span>
                        <span>Power BI</span>
                        <span>DAX</span>
                        <span>ETL</span>
                    </div>

                    <a href="#" className="project-link">
                        View Project
                    </a>
                </div>

            </div>

        </section>
    )

}

export default Projects;