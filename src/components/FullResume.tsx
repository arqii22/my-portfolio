import React from "react";

const FullResume = () => {
    return (
        <div id="fullresume">
            <img src={`${process.env.PUBLIC_URL}/resume.jpg`} alt="Resume" />
        </div>
    );
}

export default FullResume;