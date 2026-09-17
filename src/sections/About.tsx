import "../styles/about.css";

function About() {
    return (
        <section id="about" className="about">

            <p className="section-number">ABOUT ME</p>

            <h2> Turning data into clear insights and practical solutions</h2>
            <div className="about-content">
            <div className="about-text">
           <p>
            Data & Business Intelligence Analyst with a Master of Applied Data Science from the University of Canterbury and professional experience in data analytics, business intelligence, and automated reporting.
        </p>

        <p>
            Skilled in Python, SQL, Power BI, ETL, data modelling, PostgreSQL, and data visualisation, with experience transforming complex datasets into clear, actionable insights. At PHF Science, developed automated data pipelines and Community Health and Wellbeing Profiles using statistical and geospatial analysis, and contributed to an AI-powered Microsoft Word reporting platform that generated and refreshed data, tables, charts, maps, and analytical content.
        </p>

        <p>
            Experienced in working with researchers and stakeholders to understand requirements, validate data, solve analytical problems, and deliver reliable, practical reporting solutions. Technical experience with React, TypeScript, REST APIs, and Office.js also supports the development of data-driven applications.
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