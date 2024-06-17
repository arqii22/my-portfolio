import React from "react";
import { Link } from 'react-router-dom';

const Resume = () => {
    return (
        <section id="resume">
            <div className="container">
                <h2>Resume</h2>
                <hr />
                <Link to="/full-resume">
                    <img src="/resume.jpg" alt="Resume" />
                </Link>
            </div>
        </section>
    );
}

export default Resume;