import "../styles/education.css";

function Education() {
    return (
        <section className="education">
            <h2>Education & Cerifications</h2>

            <div className="education-grid">

                <div className="education-card">
                    <p>Master's Degree</p>
                    <h3>Master of Applied Data Science</h3>
                    <p>University of Canterbury</p>
                    <p>2026</p>
                </div>

                <div className="education-card">
                    <p>Certification</p>
                    <h3>Microsoft Azure Fundamentals</h3>
                    <p>Microsoft</p>
                    <p>Az-900</p>
                </div>

            </div>

        </section>
    )
}

export default Education;