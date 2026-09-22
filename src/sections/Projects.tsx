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
                    <p className="project-company">
                        PHF Science | Data Science Research Project
                    </p>  

                    <h4>Situation</h4>  
                    <p>  
                        Community wellbeing data was spread across Census, crime, 
                        environmental and air-quality sources, making consistent analysis 
                        across New Zealand communities difficult.
                    </p>  

                    <h4>Task</h4>  
                    <p>  
                        Develop an automated system to integrate community data, calculate 
                        wellbeing indicators and generate profiles for Territorial Authorities 
                        across New Zealand.
                    </p>  

                    <h4>Action</h4>  
                    <p>  
                        Built Python ETL and geospatial pipelines covering 2,395 SA2 areas 
                        and more than 850,000 Police victimisation records. Automated data 
                        cleaning, indicator calculation, geographic aggregation, maps, charts 
                        and report generation.
                    </p>  

                    <h4>Result</h4>  
                    <p>  
                        The analysis identified clear geographic differences. In 2023, the 
                        calculated victimisation rate was 95.7 per 1,000 people in Christchurch 
                        City compared with 61.4 in Far North District. Far North also recorded 
                        9.55% household crowding compared with 4.61% in Christchurch. The 
                        project delivered a reusable workflow for community wellbeing analysis 
                        and automated reporting.
                    </p>  

                    <div className="project-tools">  
                        <span>Python</span>  
                        <span>Pandas</span>  
                        <span>GeoPandas</span>  
                        <span>ETL</span>  
                        <span>Geospatial Analysis</span>  
                        <span>Data Visualisation</span>
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
                    <p className="project-company">MVP Studio | Data Analyst Internship</p>

                    <h4>Situation</h4>
                    <p>
                        During my Data Analyst internship at MVP Studio, I worked on an
                        end-to-end Business Intelligence project using Australian property,
                        location and school datasets to gain practical experience across the
                        complete BI development lifecycle.
                    </p>

                    <h4>Task</h4>
                    <p>
                        My task was to integrate data from multiple sources and develop a
                        structured BI solution for analysing property values across locations,
                        including cities, suburbs, postcodes and property value categories.
                    </p>

                    <h4>Action</h4>
                    <p>
                        I developed SSIS ETL pipelines to extract, clean and load the source
                        data into a dimensional data warehouse in SQL Server. I created SQL
                        views for analysis and built a Power BI semantic model with DAX
                        measures, interactive filters and geographic visualisations.
                    </p>

                    <h4>Result</h4>
                    <p>
                        The completed solution enabled property market analysis across New
                        South Wales. The analysis of the project dataset identified Northbridge as the highest median value
                        suburb at $3.21M, compared with approximately $95K in Broken Hill.
                        It also showed that 82.91% of properties were in the $0-$750K value
                        category, 14.77% were between $750K-$1.5M, and 2.20% were between
                        $1.5-$2.5M, providing a clear view of property value distribution
                        across the market.
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


                <div className="project-card">
                    <span className="project-number">04</span>

                    <h3>Electricity Load Forecasting</h3>
                    <p className="project-company">
                        Machine Learning Research Project
                    </p>

                    <h4>Situation</h4>
                    <p>
                        Accurate electricity load forecasting is important for power generation
                        and distribution planning. Historical load data from Pala substation
                        was analysed to investigate how machine learning could be used to
                        predict electricity demand.
                    </p>

                    <h4>Task</h4>
                    <p>
                        Compare multiple machine learning models and normalization techniques
                        to identify the most effective approach for forecasting the hourly
                        load of an incomer at the substation.
                    </p>

                    <h4>Action</h4>
                    <p>
                        Prepared approximately 3,900 historical load observations and used an
                        80/20 training and testing approach. I compared Multiple Linear
                        Regression, Support Vector Regression, Decision Tree, Random Forest,
                        XGBoost and Artificial Neural Network models. Each approach was
                        evaluated using data without normalization, Min-Max normalization and
                        Z-score normalization, with performance assessed using R², MAE, MSE
                        and RMSE.
                    </p>

                    <h4>Result</h4>
                    <p>
                        XGBoost with Min-Max normalization achieved the highest reported
                        performance at 84.53%, compared with 84.01% for Multiple Linear
                        Regression without normalization and 84.43% for the best ANN
                        configuration using Z-score normalization. The analysis identified
                        XGBoost with Min-Max normalization as the selected model for predicting
                        the substation's incomer load.
                    </p>

                    <div className="project-tools">
                        <span>Python</span>
                        <span>Machine Learning</span>
                        <span>XGBoost</span>
                        <span>Random Forest</span>
                        <span>Regression</span>
                        <span>Neural Networks</span>
                        <span>Pandas</span>
                        <span>Scikit-learn</span>
                    </div>

                     <button
                        className="project-link"
                        onClick={() => viewProject(3)}>
                        View Project
                    </button>
                </div>

            </div>

        </section>
    )

}

export default Projects;