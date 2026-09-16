import "../styles/about.css";

function About() {
    return (
        <section id="about" className="about">

            <p className="section-number">ABOUT ME</p>

            <h2> Turning data into clear insights and practical solutions</h2>

            <div className="about-text">
                <p>
                I am a Data Analyst with experience in data analysis, automation, reporting and building data-driven solutions.
                </p>

                <p>
                    I completed a Master of Applied Data Science at the University of Canterbury and worked at PHF Science, 
                    where I used Python, SQL, spatial data and web technologies to support research and reporting projects. 
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
                    <strong>Python, SQL, Power BI, React</strong>
                </div>


            </div>


           
        </section>
    );
}

export default About;