import "../styles/education.css";

function Education() {
    return (
        <section className="education">

            <p className="section-number">
                EDUCATION & CERTIFICATIONS
            </p>

            <div className="education-grid">

                {/* LEFT SIDE */}
                <div className="education-column">
                   

                    <div className="education-item">
                       
                        <div>
                            <h3>Master of Applied Data Science</h3>
                            <strong>GPA: 7.50/9</strong>
                            <p>University of Canterbury</p>
                            <p>Christchurch, New Zealand</p>
                        </div>
                    </div>

                    <div className="education-item">
                       
                        <div>
                            <h3>Master of Technology</h3>
                            <strong>GPA: 9.63/10</strong>
                            <p>Computer and Information Sciences</p>
                            <p>APJ Abdul Kalam Technological University</p>
                        </div>
                    </div>

                    <div className="education-item">
                    
                        <div>
                            <h3>Bachelor of Technology</h3>
                            <strong>GPA: 7/9</strong>
                            <p>Computer Science</p>
                            <p>Mahatma Gandhi University</p>
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="certification-column">
                    

                    <div className="education-item">
                        

                        <div>
                            <h3>Azure Fundamentals - AZ-900</h3>
                            <p>Microsoft Certified</p>
                            
                            <a href="https://learn.microsoft.com/api/credentials/share/en-us/AnjuSambasivan-8025/B2AED9C7113798E8?sharingId=1409CC9F6ACCF446"
                            target="_blank"
                            rel="noopener noreferrer">
                                View Credential
                            </a>
                        </div>
                        </div>

                         <div className="education-item">
                            
                            <div>
                            <h3>
                                Industry Connect Expert Certification -
                                Business Intelligence Developer
                            </h3>
                            <p>Industry Connect</p>
                            <a href="https://industryconnect.io/Authority/ViewCertificate?guid=7504026c-a0fa-4005-8f8c-a67c448ac3f7"
                            target="_blank"
                            rel="noopener noreferrer">
                                View Credential
                            </a>
                            </div>
                        </div>

                    </div>

            </div>

        </section>
    );
}

export default Education;