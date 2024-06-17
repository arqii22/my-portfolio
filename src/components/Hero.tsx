import React from "react";

interface HeroProps {
    title: string;
    subtitle: string;
}

const Hero = ({ title, subtitle }: HeroProps) => {
    return (
        <section id="home" className="hero">
            <div>
                <h1>{title}</h1>
                <p>{subtitle}</p>
            </div>
        </section>
    );
}

export default Hero;