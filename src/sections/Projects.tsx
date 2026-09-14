import "../styles/projects.css";

function Projects() {
    return (
        <section id="projects" className="projects">
            <h2>Projects</h2>

            <div className="project-grid">

                <div className="project-card">
                    <h3>Community Health & Wellbeing Platform</h3>

                    <p>
                        Build a reusable data pipeline to process Census,
                         environmental and community datsets across New Zealand.
                    </p>

                    <p className="project-tools">
                        Python, Pandas, Geopandas, Data Analysis 
                    </p>

                    <a href='#'>View Project</a>
                </div>

                <div className="project-card">
                    <h3>AI-Powered Reporting Platform</h3>

                    <p>
                        Built a Microsoft Word add-in that generated statistics, tables, charts, maps and AI-assited reporrting content.
                    </p>

                    <p className="project-tools">
                        React, TypeScript, Node.js, PostgreySQL
                    </p>

                    <a href="#">View Project</a>
                </div>

            </div>
        </section>
    )
}

export default Projects;