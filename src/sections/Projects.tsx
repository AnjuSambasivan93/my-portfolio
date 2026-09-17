import "../styles/projects.css";
import { useProjectStore } from "../store/projectStore";

function Projects() {

    const setSelectedProject = useProjectStore(
        (state) => state.setSelectedProject
    );
    const viewProject = (index: number) => {
        setSelectedProject(index);
        document
            .getElementById("featured-projects")
            ?.scrollIntoView({ behavior: "smooth"})
    }
    return (
        <section id="projects" className="projects">
            <p className="section-number">PROJECTS</p>

            <div className="project-grid">

                <div className="project-card">
                    <span className="project-number">01</span>
                    <h3>Community Health & Wellbeing Platform</h3>
                    <p className="project-company">PHF Science</p>
                    <h4>Situation</h4> <p> Public health and community wellbeing data was spread across multiple datasets, formats and geographic levels across New Zealand. </p>

                    <h4>Task</h4> <p> Build an automated and reusable system to analyse community wellbeing
                         indicators and generate profiles for Territorial Authorities across New Zealand. </p>

                    <h4>Action</h4> <p> Built Python ETL pipelines to clean and combine datasets,
                         calculate wellbeing indicators and composite scores, aggregate SA2 data to TA level, perform geospatial analysis with GeoPandas, and automatically generate maps, charts and summary tables. </p>

                    <h4>Result</h4> <p> Developed an automated Community Health & Wellbeing Profile System that
                         transforms multiple datasets into reusable analysis and generates consistent community profiles
                          for TAs across New Zealand. </p>

                    <div className="project-tools">
                        <span>Python</span>
                        <span>Pandas</span>
                        <span>GeoPandas</span>
                        <span>NumPy</span>
                        <span>Matplotlib</span>
                        <span>Folium</span>
                        <span>ETL</span>
                        <span>Geospatial Analysis</span>
                    </div>

                    <button 
                        className="project-link"
                        onClick={() => viewProject(0)}>
                            View Project
                        </button>

                </div>

                <div className="project-card">
                    <span className="project-number">02</span>

                    <h3>AI-Powered Reporting Platform</h3>
                    <p className="project-company">PHF Science</p>
                <h4>Situation</h4>
                    <p>
                        Researchers needed an easier way to create data-driven reports
                        containing statistics, tables, charts, maps and analytical content.
                    </p>

                    <h4>Task</h4>
                    <p>
                        Develop a Microsoft Word Add-in that could generate, insert and
                        refresh dynamic reporting content directly in Word.
                    </p>

                    <h4>Action</h4>
                    <p>
                        Developed the Word Add-in using React, TypeScript and Office.js,
                        integrated REST APIs and PostgreSQL data, and added LLM-generated
                        titles, captions and analytical content.
                    </p>

                    <h4>Result</h4>
                    <p>
                        Built an automated reporting solution that enabled researchers to
                        insert and refresh statistics, tables, charts, maps and AI-assisted
                        content directly in Microsoft Word.
                    </p>

                    <div className="project-tools">
                        <span>React</span>
                        <span>TypeScript</span>
                        <span>Office.js</span>
                        <span>Node.js</span>
                        <span>Express.js</span>
                        <span>PostgreSQL</span>
                    </div>

                    <button
                        className="project-link"
                        onClick={() => viewProject(1)} >
                            View Project
                        </button>
                </div>

                <div className="project-card">
                    <span className="project-number">03</span>
                    <h3>Property Business Intelligence Solution</h3>
                    <p className="project-company">MVP Studio</p>
                    <h4>Situation</h4>
                        <p>
                            Property, location and school data was stored across multiple CSV and Excel datasets.
                        </p>

                        <h4>Task</h4>
                        <p>
                            Build an end-to-end Business Intelligence solution for analysing Australian property data.
                        </p>

                        <h4>Action</h4>
                        <p>
                            Designed a SQL Server data warehouse using dimensional modelling, built SSIS ETL pipelines
                            to extract, transform and load data, and developed a Power BI data model with DAX measures.
                        </p>

                        <h4>Result</h4>
                        <p>
                            Developed interactive Power BI dashboards to analyse property values by city, suburb,
                            postcode and value category, with geographic mapping and interactive filters.
                        </p>

                        <div className="project-tools">
                            <span>SQL Server</span>
                            <span>SSIS</span>
                            <span>Power BI</span>
                            <span>DAX</span>
                            <span>ETL</span>
                            <span>Dimensional Modelling</span>
                        </div>

                    <button
                        className="project-link"
                        onClick={() => viewProject(2)}>
                            View Project
                        </button>
                </div>

            </div>

        </section>
    )

}

export default Projects;