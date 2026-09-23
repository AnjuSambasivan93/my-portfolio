import "../styles/education.css";

function Education() {
    return (
        <section className="education">

            <p className="section-number">
                EDUCATION & CERTIFICATIONS
            </p>

            <div className="education-grid">

                {/* LEFT SIDE - EDUCATION */}
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


                {/* RIGHT SIDE - CERTIFICATIONS */}
                <div className="certification-column">

                    {/* Microsoft Azure */}
                    <div className="education-item">
                        <div>
                            <h3>
                                Microsoft Certified: Azure Fundamentals (AZ-900)
                            </h3>
                            <p>Microsoft</p>

                            <a
                                href="https://learn.microsoft.com/api/credentials/share/en-us/AnjuSambasivan-8025/B2AED9C7113798E8?sharingId=1409CC9F6ACCF446"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View Credential
                            </a>
                        </div>
                    </div>


                    {/* Business Intelligence */}
                    <div className="education-item">
                        <div>
                            <h3>
                                Industry Connect Expert Certification -
                                Business Intelligence Developer
                            </h3>
                            <p>Industry Connect</p>

                            <a
                                href="https://industryconnect.io/Authority/ViewCertificate?guid=7504026c-a0fa-4005-8f8c-a67c448ac3f7"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View Credential
                            </a>
                        </div>
                    </div>


                    {/* Data Analysis */}
                    <div className="education-item">
                        <div>
                            <h3>
                                Data Analysis: SQL, Tableau, Power BI & Excel
                            </h3>
                            <p>Udemy</p>

                            <a
                                href="http://ude.my/UC-9b905bfb-3b82-45b1-acad-604d210ff301"
                                target="_blank"
                                rel="noopener noreferrer"
                            >View Credential</a>
                        </div>
                    </div>


                    {/* Docker */}
                    <div className="education-item">
                        <div>
                            <h3>
                                Docker in a Weekend: 40 Practical Demos for DevOps Learners
                            </h3>
                            <p>Udemy</p>
                           
                           <a
                                href="http://ude.my/UC-06bb608f-82ca-4095-a7a7-953907f4f519"
                                target="_blank"
                                rel="noopener noreferrer"
                            >View Credential</a>
                        </div>
                    </div>

                    <div className="education-item">
                    <div>
                        <h3>
                            Databricks Certified Data Engineer Associate - Ultimate Prep
                        </h3>
                        <p>Udemy</p>

                        <a
                            href="http://ude.my/UC-cf7894e3-2e97-434d-8744-e9ef78a87f85"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
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