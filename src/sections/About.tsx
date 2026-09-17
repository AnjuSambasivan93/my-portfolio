import "../styles/about.css";

function About() {
    return (
        <section id="about" className="about">

            <p className="section-number">ABOUT ME</p>

            <h2> Turning data into clear insights and practical solutions</h2>
            <div className="about-content">
            <div className="about-text">
            <p>I am a Data & Business Intelligence Analyst with a Master of Applied Data Science from 
                the University of Canterbury and professional experience in data analytics, 
                business intelligence and automated reporting.</p>

            <p>I have experience working with complex datasets using Python and SQL,
                 developing ETL workflows and data models, and creating Power BI dashboards and 
                 visualisations that turn data into clear, decision-useful insights. At PHF Science, 
                 I developed automated data pipelines and Community Health and Wellbeing Profiles for Territorial Authorities across New Zealand, including statistical and geospatial analysis.</p>

            <p>My experience also includes working with researchers and stakeholders to understand requirements, 
                validate data and deliver practical reporting solutions. 
                I have additional development experience with React, TypeScript, REST APIs and PostgreSQL, 
                allowing me to work across both data analysis and data-driven applications. </p>
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
                    <span>Focus</span>
                    <strong>Data Analytics, BI, Data Science</strong>
                </div>

                <div>
                    <span>Core Tools</span>
                    <strong>Python, R, SQL, Power BI, React</strong>
                </div>


            </div>

</div>

           
        </section>
    );
}

export default About;