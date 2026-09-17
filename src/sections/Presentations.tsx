import "../styles/presentations.css";

function Presentations() {
    return (
        <section id="presentations" className="presentations">

            <p className="section-number">
                PRESENTATIONS & PUBLICATIONS
            </p>


            {/* eResearch NZ 2026 */}
            <div className="presentation-item">

                <div className="presentation-year">
                    2026
                </div>

                <div className="presentation-content">

                    <h2>eResearch NZ 2026 Conference</h2>

                    <p className="presentation-location">
                        University of Auckland · Auckland, New Zealand
                    </p>

                    <h3>
                        Community Health and Wellbeing Project
                    </h3>

                    <p>
                        Presented the Community Health and Wellbeing Project,
                        highlighting the use of data analysis and reporting
                        to better understand communities across New Zealand.
                    </p>

                    <div className="presentation-tags">
                        <span>Data Analytics</span>
                        <span>Public Health</span>
                        <span>Research Presentation</span>
                    </div>

                </div>

            </div>


            {/* AI-Based Electricity Load Forecasting */}
            <div className="presentation-item">

                <div className="presentation-year">
                    Research
                </div>

                <div className="presentation-content">

                    <h2>
                        9th National Conference on Indian Language Computing
                    </h2>

                    <p className="presentation-location">
                        Cochin University
                    </p>

                    <h3>
                        Study of AI-Based Methods for Electricity Load Forecasting
                    </h3>

                    <p>
                        Presented and published research examining AI-based
                        methods for electricity load forecasting.
                    </p>

                    <div className="presentation-tags">
                        <span>Artificial Intelligence</span>
                        <span>Machine Learning</span>
                        <span>Forecasting</span>
                        <span>Publication</span>
                    </div>

                </div>

            </div>


            {/* Statistical Load Forecasting */}
            <div className="presentation-item">

                <div className="presentation-year">
                    Research
                </div>

                <div className="presentation-content">

                    <h2>
                        3rd National Conference on Advances in Informatics
                        and Computing Technologies
                    </h2>

                    <p className="presentation-location">
                        APJ Abdul Kalam Technological University
                    </p>

                    <h3>
                        Electricity Load Forecasting Using Statistical Methods - A Study
                    </h3>

                    <p>
                        Presented research examining statistical methods
                        for electricity load forecasting.
                    </p>

                    <div className="presentation-tags">
                        <span>Data Analysis</span>
                        <span>Statistical Methods</span>
                        <span>Forecasting</span>
                        <span>Research</span>
                    </div>

                </div>

            </div>

        </section>
    );
}

export default Presentations;