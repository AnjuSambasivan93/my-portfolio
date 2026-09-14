import "../styles/skills.css";

function Skills() {
    return (
        <section id="skills" className="skills">
            <h2> Skills</h2>



            <div className="skill-group">
                <h3>Data & Analytics</h3>

            <div className="skill-list">
                <span>Python</span>
                <span>SQL</span>
                <span>Power BI</span>
                <span>ETL</span>
                <span>Data Modelling</span>
            </div>
            </div>

            <div className="skill-group">
                <h3>Development</h3>


                <div className="skill-list">
                    <span>React</span>
                    <span>TypeScript</span>
                    <span>Node.js</span>
                    <span>Express.js</span>
                    <span>PostgreSQL</span>
                </div>
            </div>


        </section>
    );
}

export default Skills;