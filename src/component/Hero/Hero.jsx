import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import myImage from '../../assets/my-profile-image.jpeg'
import ScrollDownIndicator from "../../library/scrollDownIndicator/ScrollDownIndicator.jsx";
const HeroSection = () => {
    return (
        <section className="bg-primary min-h-screen flex items-center">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-8 md:mb-0 pl-32">
                    <h1 className="text-4xl md:text-6xl font-bold text-accent-primary mb-4">
                        Hi,
                        <br/>
                        I'm Mangesh Sawant
                    </h1>
                    <TypeAnimation
                        sequence={[
                            'Angular Developer',
                            1000,
                            'React Developer',
                            1000,
                            'Frontend Specialist',
                            1000,
                            'Responsive Design Expert',
                            1000,
                            'UI/UX Enthusiast',
                            1000,
                            'Web Application Builder',
                            1000,
                            'User-Centric Developer',
                            1000
                        ]}
                        wrapper="h2"
                        cursor={true}
                        repeat={Infinity}
                        className="text-2xl md:text-3xl text-secondary"
                    />
                </div>
                <div className="md:w-1/2">
                    <img
                        src={myImage}
                        alt="Mangesh Sawant"
                        className="rounded-full w-64 h-64 md:w-96 md:h-96 object-cover mx-auto border-solid-2"
                    />
                </div>
            </div>
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                <ScrollDownIndicator/>
            </div>
        </section>
    );
};

export default HeroSection;