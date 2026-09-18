import "../styles/about.css";

function About() {
    return (
        <section id="about" className="about">

            <p className="section-number">ABOUT ME</p>

            <h2> Turning data into clear insights and practical solutions</h2>
            <div className="about-content">
            <div className="about-text">
          <p>
                        Kia ora, my name is Anju. I’m a Data and Business Intelligence Analyst
                        with a Master of Applied Data Science from the University of Canterbury.
                    </p>

                    <p>
                        I enjoy working with data to understand problems, find useful patterns
                        and turn complex information into clear insights. My experience includes
                        Python, SQL, Power BI, ETL, data modelling, spatial analysis and automated
                        reporting.
                    </p>

                    <p>
                        At PHF Science, I worked across data analytics, automated reporting
                        and software development. My work involved building data pipelines,
                        analysing complex datasets, creating visualisations, and contributing
                        to an AI-powered Microsoft Word reporting platform.
                    </p>

                    <p>
                        What I enjoy most is building practical solutions that make data easier
                        for people to understand and use. I’m continuing to develop my skills in
                        data analytics, business intelligence, cloud technologies and AI-enabled
                        data solutions.
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