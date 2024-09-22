import React from 'react';
import TitleTextComponent from "../../library/TitleTextComponet/TitleTextComponent.jsx";
import Button from "../Button/Button.jsx";

const About = () => {
    return (
        <section className="bg-primary py-16">
            <div className="flex w-full flex-col mx-auto px-4">
                <TitleTextComponent title="About Me"></TitleTextComponent>
                <div className="md:w-2/3 md:pl-8 w-full m-auto">
                    <p className="text-text-primary mb-4 text-center">
                        Hello! I'm Mangesh, Enthusiastic Front-End Developer with 1.5 years of experience in
                        building engaging and user-friendly websites using HTML, CSS, and
                        Angular. I enjoy designing responsive interfaces that improve user
                        experience. As a team player, I thrive on collaborating with others to
                        deliver high-quality projects on schedule.
                    </p>
                    <p className="text-text-primary mb-6 text-center">
                        I believe in continuous learning and am always excited to take on new challenges in the
                        ever-evolving world of web development.
                    </p>
                    <div className="flex justify-center md:justify-start m-auto w-fit">
                        <Button variant="outline" size="small">
                            Get in Touch
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;