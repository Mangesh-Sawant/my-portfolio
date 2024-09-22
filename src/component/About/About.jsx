import React from 'react';
import TitleTextComponent from "../../library/TitleTextComponet/TitleTextComponent.jsx";
import profileImage from "../../assets/my-profile-image.jpeg";
import Button from "../Button/Button.jsx";

const About = () => {
    return (
        <section className="bg-primary py-16">
            <div className="container mx-auto px-4">
                <TitleTextComponent title="About Me"></TitleTextComponent>
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/3 mb-8 md:mb-0">
                        <img src={profileImage}
                             alt="Your Name"
                             className="rounded-full w-64 h-64 object-cover mx-auto border-4 border-accent-secondary"
                        />
                    </div>
                    <div className="md:w-2/3 md:pl-8">
                        <p className="text-text-primary mb-4">
                            Hello! I'm Mangesh, Enthusiastic Front-End Developer with 1.5 years of experience in
                            building engaging and user-friendly websites using HTML, CSS, and
                            Angular. I enjoy designing responsive interfaces that improve user
                            experience. As a team player, I thrive on collaborating with others to
                            deliver high-quality projects on schedule.
                        </p>
                        <p className="text-text-primary mb-6">
                            I believe in continuous learning and am always excited to take on new challenges in the
                            ever-evolving world of web development.
                        </p>
                        <div className="flex justify-center md:justify-start">
                            <Button variant="outline" size="small">
                                Get in Touch
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;