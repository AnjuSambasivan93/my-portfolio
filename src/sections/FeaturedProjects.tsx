import { useState } from "react";
import "../styles/featuredProjects.css";
import { useProjectStore } from "../store/projectStore";

import community1 from "../assets/projects/community-1.png";
import community2 from "../assets/projects/community-2.png";
import community3 from "../assets/projects/community-3.png";
import community4 from "../assets/projects/community-4.png";
import community5 from "../assets/projects/community-5.png";
import community6 from "../assets/projects/community-6.png";
import community7 from "../assets/projects/community-7.png";
import community8 from "../assets/projects/community-8.png";
import community9 from "../assets/projects/community-9.png";
import community10 from "../assets/projects/community-10.png";


import addin1 from "../assets/projects/addin-1.png";
import addin2 from "../assets/projects/addin-2.png";
import addin3 from "../assets/projects/addin-3.png";


import ssis1 from "../assets/projects/ssis-1.png";
import ssis2 from "../assets/projects/ssis-2.png";
import ssis3 from "../assets/projects/ssis-3.png";
import ssis4 from "../assets/projects/ssis-4.png";
import ssis5 from "../assets/projects/ssis-5.png";


function FeaturedProjects() {

    const projects = [
        {
            title: "Community Health & Wellbeing Reporting Platform",
            company: "PHF Science",
            description:
            "Developed an automated data analysis and reporting platform to generate Community Wellbeing profiles for Territorial Authorities across New Zealand",
            images: [
                community1,
                community2,
                community3,
                community4,
                community5,
                community6,
                community7,
                community8,
                community9,
                community10
            ],
                        tools: "Python, Pandas, GeoPandas, NumPy, Spatial Analysis, ETL",
            link: "#"
            
        },

        {
            title: "AI-Powered Reporting Platform",
            company: "PHF Science",
            description: 
            "Developed a reporting platform that generates data, charts, maps and AI-assisted content directly in Microsoft Word.",
            images: [
                addin1,
                addin2,
                addin3
            ],
            tools: "React, TypeScript, Node.js, PostgreSQL, Office.js, LLM",
            link:"#"
        },
        {
            title: "Property Market Business Intelligence Solution",
            company: "MVP Studio",
            description:
            "Developed an end-to-end Business Intelligence solution for property market analysis, using SSIS for ETL, SQL Server for data warehousing and analytical views, and Power BI for interactive reporting and visualisation.",
            images: [
                ssis1,
                ssis2,
                ssis3,
                ssis4,
                ssis5
            ],
            tools: "SQL Server, SSIS, Power BI, ETL, Data Warehousing, SQL",
            link: "#"
        }
    ];

    const currentProject = useProjectStore((state) => state.selectedProject);
    const setCurrentProject = useProjectStore((state) => state.setSelectedProject);

    const [currentImage, setCurrentImage] = useState(0);

    const project = projects[currentProject];

    const nextProject = () => {
        setCurrentProject(
            (currentProject + 1) % projects.length
        );
        setCurrentImage(0);
    };
    const previousProject = () => {
        setCurrentProject(
            (currentProject - 1 + projects.length) % projects.length
        );
        setCurrentImage(0);
    };
    const nextImage = () => {
        setCurrentImage(
            (currentImage + 1) % project.images.length
        );
    };

    const previousImage = () => {
        setCurrentImage(
            (currentImage - 1 + project.images.length) % project.images.length
        );
    };

    return (
        <section id="featured-projects" className="featured-projects">

            <p className="section-number">
                FEATURED PROJECT
            </p>

            <div className="featured-header">

                <div>
                    <h2>{project.title}</h2>
                    <p className="featured-company">
                        {project.company}
                    </p>
                </div>

                <div className="project-buttons">
                    <button onClick={previousProject}> ← Previous</button>
                    <button onClick={nextProject}> Next → </button>
                </div>
            </div>

            <p className="featured-description">
                {project.description}
            </p>

            <div className="featured-image">
                <button className="image-left" onClick={previousImage}> ‹ </button>

                <img src={project.images[currentImage]}
                alt={project.title}/>

                <button className="image-right" onClick={nextImage}> › </button>


                <div className="image-count">
                    {currentImage + 1} / {project.images.length}
                </div>
            </div>


            <p className="featured-tools">
                {project.tools}
            </p>
            {currentProject === 0 && (
                <div className="sample-reports">

                    <a href="/reports/report-1.pdf" target="_blank">
                        Sample Report 1
                    </a>

                    <a href="/reports/report-2.pdf" target="_blank">
                        Sample Report 2
                    </a>

                    <a href="/reports/report-3.pdf" target="_blank">
                        Sample Report 3
                    </a>

                    <a href="/reports/report-4.pdf" target="_blank">
                        Sample Report 4
                    </a>

                    <a href="/reports/report-5.pdf" target="_blank">
                        Sample Report 5
                    </a>
                    <a href="/reports/report-6.pdf" target="_blank">
                        Sample Report 6
                    </a>
                    <a href="/reports/report-7.pdf" target="_blank">
                        Sample Report 7
                    </a>

                </div>
            )}


        </section>
    )
}
export default FeaturedProjects;