import "../styles/skills.css"; 
 
function Skills() { 
    return ( 
        <section id="skills" className="skills"> 
            <p className="section-number">SKILLS</p> 
 
            <div className="skills-grid"> 
 
                <div className="skill-group"> 
                    <h3>Data Analytics & BI</h3> 
 
                    <div className="skill-list"> 
                        <span>Power BI</span> 
                        <span>DAX</span> 
                        <span>Power Query</span> 
                        <span>SQL</span> 
                        <span>Excel</span> 
                        <span>Data Visualisation</span> 
                        <span>Statistical Analysis</span> 
                    </div> 
                </div> 
 
                <div className="skill-group"> 
                    <h3>Data Engineering</h3> 
 
                    <div className="skill-list"> 
                        <span>ETL Pipelines</span> 
                        <span>SSIS</span> 
                        <span>Data Modelling</span> 
                        <span>Data Warehousing</span> 
                        <span>Dimensional Modelling</span> 
                        <span>Data Integration</span> 
                        <span>Data Quality</span> 
                    </div> 
                </div> 
 
                <div className="skill-group"> 
                    <h3>Programming & Analytics</h3> 
                     
                    <div className="skill-list"> 
                        <span>Python</span> 
                        <span>Pandas</span> 
                        <span>NumPy</span> 
                        <span>R</span> 
                        <span>GeoPandas</span> 
                        <span>Matplotlib</span> 
                        <span>Scikit-learn</span> 
                    </div> 
                </div> 
 
                <div className="skill-group"> 
                    <h3>Databases & Data Platforms</h3> 
 
                    <div className="skill-list"> 
                        <span>SQL Server</span> 
                        <span>PostgreSQL</span> 
                        <span>Snowflake</span> 
                        <span>Databricks</span> 
                        <span>SQLite</span> 
                        <span>Apache Spark</span>
                        <span>PySpark</span>
                        <span>Microsoft Azure</span> 
                    </div> 
                </div> 
 
                <div className="skill-group"> 
                    <h3>Development & Tools</h3> 
 
                    <div className="skill-list"> 
                        <span>Git</span> 
                        <span>GitHub</span> 
                        <span>Azure DevOps</span> 
                        <span>REST APIs</span> 
                        <span>React</span> 
                        <span>TypeScript</span> 
                        <span>Node.js</span> 
                    </div> 
                </div> 
 
                <div className="skill-group"> 
                    <h3>Currently Upskilling</h3> 
 
                    <div className="skill-list"> 
                        <span>PL-300</span> 
                        <span>Azure Data Engineering</span> 
                        <span>Databricks</span> 
                        <span>Docker</span> 
                        <span>CI/CD</span> 
                    </div> 
                </div> 
 
            </div> 
        </section> 
    ) 
} 
 
export default Skills;