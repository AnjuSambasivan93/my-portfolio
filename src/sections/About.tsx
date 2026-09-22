import "../styles/about.css"; 
 
function About() { 
    return ( 
        <section id="about" className="about"> 
 
            <p className="section-number">ABOUT ME</p> 
 
            <h2>Turning complex data into insights that support better decisions</h2> 
 
            <div className="about-content"> 
                <div className="about-text"> 
 
                    <p> 
                        Kia ora, my name is Anju. I’m a Data and Business Intelligence Analyst 
                        with a Master of Applied Data Science from the University of Canterbury, 
                        specialising in transforming complex data into clear, actionable insights.
                    </p> 
 
                    <p> 
                        My experience covers the complete analytics workflow, from data cleaning, 
                        ETL and data modelling through to analysis, Power BI dashboards, 
                        visualisation and automated reporting. I work primarily with Python, SQL, 
                        Power BI and modern data platforms.
                    </p> 
 
                    <p> 
                        At PHF Science, I developed data pipelines supporting analysis across 
                        2,395 SA2 areas and more than 850,000 Police victimisation records, 
                        combining Census, crime, environmental and air-quality data for community 
                        wellbeing analysis. I also contributed to a Microsoft Word reporting 
                        application that generates and refreshes statistics, tables, charts, maps 
                        and AI-assisted analytical content.
                    </p> 
 
                    <p> 
                        I enjoy building practical data solutions that go beyond presenting numbers, 
                        combining reliable data pipelines, analysis and visual storytelling to help 
                        people understand what the data means and use it to make informed decisions.
                    </p> 
 
                </div> 
 
                <div className="about-details"> 
                    <div> 
                        <span>Location</span> 
                        <strong>Christchurch, New Zealand</strong> 
                    </div> 
 
                    <div> 
                        <span>Education</span> 
                        <strong>Master of Applied Data Science</strong> 
                    </div> 
 
                    <div> 
                        <span>Work Rights</span> 
                        <strong>NZ Permanent Resident</strong> 
                    </div> 
 
                    <div> 
                        <span>Specialisation</span> 
                        <strong>Data Analytics · Business Intelligence</strong> 
                    </div> 
 
                    <div> 
                        <span>Core Tools</span> 
                        <strong>Power BI · SQL · Python · ETL</strong> 
                    </div> 
 
                    <div> 
                        <span>Status</span> 
                        <strong>Open to Opportunities</strong> 
                    </div> 
                </div> 
 
            </div> 
 
        </section> 
    ); 
} 
 
export default About;