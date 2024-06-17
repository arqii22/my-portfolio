import React from "react";
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <section id="projects">
            <div className="container">
                <h2>Projects</h2>
                <hr />
                <div className="project-cards">
                    <div className="project-card">
                        <h3>Project One</h3>
                        <img src={`${process.env.PUBLIC_URL}/swanson.jpg`} alt="Ron Swanson" />
                        <Link to="/project-one">View Project</Link>
                    </div>
                    <div className="project-card">
                        <h3>Project Two</h3>
                        <img src={`${process.env.PUBLIC_URL}/classwork.jpeg`} alt="Classwork" />
                        <Link to="/project-two">View Project</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;