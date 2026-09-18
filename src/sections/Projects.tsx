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

                <h3>Community Health & Wellbeing Profile System</h3>
                <p className="project-company">PHF Science</p>

                <h4>Situation</h4>
                <p>
                    Community wellbeing information was spread across Census, crime,
                    environmental and air-quality datasets, making consistent analysis
                    across New Zealand difficult.
                </p>

                <h4>Task</h4>
                <p>
                    My goal was to build an automated and reusable system to analyse
                    community wellbeing across 2,395 SA2 areas and generate profiles
                    for Territorial Authorities across New Zealand.
                </p>

                <h4>Action</h4>
                <p>
                    I developed Python ETL pipelines combining Census and community
                    wellbeing data from 2018 and 2023, Police victimisation data from
                    2022–2024, environmental data for 2023, and air-quality data from
                    2018–2022. I calculated wellbeing indicators and composite scores,
                    aggregated SA2 data to Territorial Authority level, performed
                    geospatial analysis, and automated maps, charts, summary tables
                    and report generation.
                </p>

                <h4>Result</h4>
                <p>
                    The project delivered an automated Community Health & Wellbeing
                    Profile System that transforms multiple datasets into consistent
                    community-level analysis, visualisations and reports for 67
                    Territorial Authorities across New Zealand.
                </p>

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
            </div>

                <div className="project-card">
                    <span className="project-number">02</span>

                    <h3>AI-Powered Reporting Platform</h3>
                    <p className="project-company">PHF Science</p>
                <h4>Situation</h4>
                    <p>
                        Researchers needed an efficient way to produce complex reports containing
                        statistics, tables, charts, maps and analytical insights.
                    </p>

                    <h4>Task</h4>
                    <p>
                        My role was to help create a Microsoft Word Add-in that could bring
                        information from multiple sources into documents and keep it up to date
                        without relying on repetitive manual work.
                    </p>

                    <h4>Action</h4>
                    <p>
                        I built the user interface using React and TypeScript and integrated it
                        with Microsoft Word through Office.js. I connected REST APIs and PostgreSQL
                        to retrieve dynamic values, tables, charts and maps, and incorporated LLM
                        capabilities to generate AI-assisted narratives and captions.
                    </p>

                    <h4>Result</h4>
                    <p>
                        The solution streamlined document creation by allowing researchers to
                        insert, update and generate analytical material directly within their
                        existing Microsoft Word workflow.
                    </p>

                    <div className="project-tools">
                        <span>React</span>
                        <span>TypeScript</span>
                        <span>Office.js</span>
                        <span>Node.js</span>
                        <span>Express.js</span>
                        <span>PostgreSQL</span>
                        <span>REST APIs</span>
                        <span>LLM</span>
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
                            Property, location and school information was spread across multiple
                            CSV and Excel datasets, making analysis and comparison difficult.
                        </p>

                        <h4>Task</h4>
                        <p>
                            My goal was to create an end-to-end Business Intelligence solution
                            that transformed Australian property data into a structured format
                            for analysis and decision-making.
                        </p>

                        <h4>Action</h4>
                        <p>
                            I designed a dimensional data warehouse in SQL Server and created
                            SSIS ETL pipelines to extract, clean, transform and load source data.
                            I also created analytical SQL views and a Power BI data model with
                            DAX measures for interactive analysis.
                        </p>

                        <h4>Result</h4>
                        <p>
                            The final dashboard provided an interactive view of property values
                            across cities, suburbs, postcodes and value categories, supported by
                            geographic visualisations and dynamic filtering.
                        </p>

                        <div className="project-tools">
                            <span>SQL Server</span>
                            <span>SSIS</span>
                            <span>Power BI</span>
                            <span>DAX</span>
                            <span>ETL</span>
                            <span>Data Warehousing</span>
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