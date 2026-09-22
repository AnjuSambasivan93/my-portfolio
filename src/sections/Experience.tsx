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
                    <span>Jan 2026 - Jul 2026</span> 
                </div> 
 
                <p>
                    Developed a Microsoft Word Add-in that enables researchers to generate 
                    and refresh data-driven reports with statistics, tables, charts, maps 
                    and AI-assisted insights directly in Word.
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
                    <span>Jul 2025 - Jan 2026</span> 
                </div> 
 
                <p>
                    Built Python ETL and geospatial pipelines to analyse 2,395 SA2 areas 
                    and 850,000+ Police victimisation records, transforming multiple 
                    datasets into automated community wellbeing analysis and reports.
                </p> 
 
                <div className="experience-tools"> 
                    <span>Python</span> 
                    <span>Pandas</span> 
                    <span>NumPy</span> 
                    <span>GeoPandas</span> 
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
                    Built an end-to-end Business Intelligence solution using SSIS, SQL Server 
                    and Power BI, identifying property value patterns including $3.21M in 
                    Northbridge compared with approximately $95K in Broken Hill.
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
 
            <div className="experience-item"> 
                <div className="experience-header"> 
                    <div> 
                        <h3>Associate Data Analyst</h3> 
                        <h4>Brain Script Analytica</h4> 
                    </div> 
                    <span>Nov 2018 - Aug 2020</span> 
                </div> 
 
                <p>
                    Analysed historical electricity demand and compared six machine learning 
                    models, with XGBoost using Min-Max normalisation achieving the strongest 
                    reported performance at 84.53%.
                </p> 
 
                <div className="experience-tools"> 
                    <span>Python</span> 
                    <span>Pandas</span> 
                    <span>Machine Learning</span> 
                    <span>XGBoost</span>
                    <span>TensorFlow</span> 
                    <span>Keras</span> 
                </div> 
            </div> 
        </section> 
    ) 
} 
 
export default Experience;