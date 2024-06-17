import React from "react";
import { Link } from "react-router-dom";

const ProjectOne = () => {
    return (
        <div id="project-details">
            <h1>Ron Swanson Caption Generator</h1>
            <hr />
            <h2>Project Overview</h2>
            <p>The Ron Swanson Caption Generator is a fun and engaging React application that allows users to add a touch of humor to their images with quotes from the iconic character, Ron Swanson, from the TV show "Parks and Recreation." By utilizing the Ron Swanson Quotes API, this app generates random quotes that can be used as captions for any image URL submitted by the user.</p>
            <h2>Features</h2>
            <ul>
                <li><strong>User-Friendly Interface:</strong> A clean and intuitive interface that makes it easy for users to upload their images and generate captions.</li>
                <li><strong>Random Quote Generation:</strong> Each time an image is uploaded, a new Ron Swanson quote is fetched from the API and displayed as a caption.</li>
                <li><strong>Instant Preview:</strong> Users can immediately see the quote applied to their image, making the experience interactive and fun.</li>
            </ul>
            <h2>How It Works</h2>
            <ol>
                <li><strong>Image Upload:</strong> Users can submit any image URL they wish to use.</li>
                <li><strong>Quote Fetching:</strong> The app makes a call to the Ron Swanson Quotes API to retrieve a random quote.</li>
                <li><strong>Caption Display:</strong> The quote is displayed as a caption on the user's image.</li>
            </ol>
            <h2>Technology Stack</h2>
            <ul>
                <li><strong>Frontend:</strong> React.js for building the user interface.</li>
                <li><strong>API:</strong> Ron Swanson Quotes API for fetching the quotes.</li>
                <li><strong>Styling:</strong> CSS and/or styled-components for a polished look.</li>
            </ul>
            <h2>Potential Use Cases</h2>
            <ul>
                <li><strong>Social Media Posts:</strong> Create humorous and shareable content for social media.</li>
                <li><strong>Meme Generation:</strong> Easily generate memes with classic Ron Swanson quotes.</li>
                <li><strong>Entertainment:</strong> Simply enjoy the fun of seeing your favorite character's quotes applied to various images.</li>
            </ul>
            <h2>Future Enhancements</h2>
            <ul>
                <li><strong>Customization Options:</strong> Allow users to customize the font, size, and position of the caption.</li>
                <li><strong>Image Filters:</strong> Add filters and effects to enhance the visual appeal of the images.</li>
                <li><strong>Download Option:</strong> Give users have the option to download the image with the caption or share it directly on social media.</li>
                <li><strong>Responsive Design:</strong> Make the application fully responsive, ensuring a seamless experience on both desktop and mobile devices.</li>
            </ul>
            <Link to="/project-two"><button>Next</button></Link>
        </div>
    );
}

export default ProjectOne;