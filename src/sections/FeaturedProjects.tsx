import { useState } from "react";
import "../styles/featuredProjects.css";

import community1 from "../assets/projects/community-1.jpg";
import community2 from "../assets/projects/community-2.jpg";
import community3 from "../assets/projects/community-3.jpg";


import addin1 from "../assets/projects/addin-1.jpg";

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
                community3
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
                addin1
            ],
            tools: "React, TypeScript, Node.js, PostgreSQL, Office.js, LLM",
            link:"#"
        }
    ];

    const [currentProject, setCurrentProject] = useState(0);
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
        <section className="featured-projects">

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

            <a href={project.link} className="featured-link">
                View All Reports →
            </a>



        </section>
    )
}
export default FeaturedProjects;