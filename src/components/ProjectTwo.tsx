import React from "react";
import { Link } from "react-router-dom";

const ProjectTwo = () => {
    return (
        <div id="project-details">
            <h1>Classwork: Artwork Organizer</h1>
            <hr />
            <h2>Project Overview</h2>
            <p>Classwork (name subject to change) is an innovative app designed to help parents preserve and organize their children's artwork, school projects, and other creative endeavors. As children bring home numerous creations from school, it can become overwhelming for parents to keep everything. This app provides a practical solution for storing and cherishing these precious memories digitally.</p>
            <h2>Features</h2>
            <ul>
                <li><strong>Easy Uploads:</strong> Parents can quickly and easily upload photos of their children's artwork and school projects directly from their phone or computer.</li>
                <li><strong>Organized Storage:</strong> Items can be categorized by date, type, or school year, ensuring that every creation is easy to find.</li>
                <li><strong>Digital Archive:</strong> A secure and accessible digital archive that helps reduce clutter and keeps precious memories safe.</li>
                <li><strong>Sharing Options:</strong> Parents can share their children's artwork with family and friends via social media or private links.</li>
                <li><strong>Custom Albums:</strong> Create custom albums for different children or types of projects, making it simple to organize and showcase the best works.</li>
                <li><strong>Memory Lane:</strong> A timeline feature that allows parents and children to look back at their creative journey over the years.</li>
            </ul>
            <h2>How It Works</h2>
            <ol>
                <li><strong>Upload:</strong> Parents upload photos of their children's artwork or projects.</li>
                <li><strong>Categorize:</strong> The app allows categorization by date, type of project, or other custom tags.</li>
                <li><strong>Store:</strong> All uploads are stored securely in the cloud, accessible from any device.</li>
                <li><strong>Share:</strong> Easily share individual items or entire albums with family and friends.</li>
                <li><strong>Reflect:</strong> Use the timeline feature to reflect on the child's progress and creativity over time.</li>
            </ol>
            <h2>Technology Stack</h2>
            <ul>
                <li><strong>Frontend:</strong> React Native for a cross-platform mobile experience.</li>
                <li><strong>Backend:</strong> Node.js with TypeScript for server-side logic.</li>
                <li><strong>Database:</strong> PostgreSQL for robust and reliable data storage.</li>
                <li><strong>Cloud Storage:</strong> AWS S3 for secure and reliable storage of uploaded images.</li>
                <li><strong>Authentication:</strong> AWS Cognito for secure and easy user login.</li>
            </ul>
            <h2>Potential Use Cases</h2>
            <ul>
                <li><strong>Memory Preservation:</strong> Ensure that all of a child's creative works are preserved and easily accessible.</li>
                <li><strong>Decluttering:</strong> Reduce physical clutter in the home by storing projects digitally.</li>
                <li><strong>Family Sharing:</strong> Share children's artwork with grandparents and other family members who live far away.</li>
                <li><strong>School Projects:</strong> Keep a record of school projects and assignments in one place.</li>
                <li><strong>Creative Reflection:</strong> Use the timeline to encourage children by showing them how much they have progressed.</li>
            </ul>
            <h2>Future Enhancements</h2>
            <ul>
                <li><strong>Editing Tools:</strong> Add basic photo editing tools for cropping and enhancing images.</li>
                <li><strong>Comments and Reactions:</strong> Allow family members to comment on and react to the uploaded artwork.</li>
                <li><strong>Print Options:</strong> Provide options to create photo books or prints of the uploaded artwork.</li>
                <li><strong>Collaboration:</strong> Enable teachers to upload class projects directly to a child's album.</li>
                <li><strong>AI Organization:</strong> Implement AI to automatically categorize and tag uploaded images for easier organization.</li>
            </ul>
            <Link to="/project-one"><button>Previous</button></Link>
        </div>
    );
}

export default ProjectTwo;