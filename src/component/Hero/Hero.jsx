import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import myImage from '../../assets/my-profile-image.jpeg'
import ScrollDownIndicator from "../../library/ScrollDownIndicator/ScrollDownIndicator.jsx";

const HeroSection = () => {
    const SCROLL_OFFSET = 100;
    const scrollToSection = (sectionId) => () => {
        const section = document.getElementById(sectionId);
        if (section) {
            const offsetTop = section.getBoundingClientRect().top + window.pageYOffset - SCROLL_OFFSET;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section id="hero" className="bg-primary min-h-screen flex items-center">
            <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center">
                <div className="w-full sm:w-1/2 order-2 sm:order-1 mb-8 sm:mb-0 sm:pl-8 md:pl-16 lg:pl-32">
                    <h1 className="text-4xl md:text-6xl font-bold text-accent-primary mb-4 text-center sm:text-start">
                        Hi,
                        <br/>
                        I'm Mangesh Sawant
                    </h1>
                    <div className="w-full flex justify-center sm:justify-start">
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
                            className="text-2xl md:text-3xl text-secondary text-center sm:text-start"
                        />
                    </div>
                </div>
                <div className="w-full sm:w-1/2 order-1 sm:order-2 mb-8 sm:mb-0">
                    <img
                        src={myImage}
                        alt="Mangesh Sawant"
                        className="rounded-full w-44 h-44 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover mx-auto border-solid border-2 border-accent-primary"
                    />
                </div>
            </div>
            <button className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
                    onClick={scrollToSection('about')}>
                <ScrollDownIndicator/>
            </button>
        </section>
    );
};

export default HeroSection;