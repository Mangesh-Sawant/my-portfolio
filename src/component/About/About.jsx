import React from 'react';
import TitleTextComponent from "../../library/TitleTextComponet/TitleTextComponent.jsx";
import Button from "../../library/Button/Button.jsx";
import {IconMail, IconFileDownload} from '@tabler/icons-react';

const About = () => {

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
        <section id="about" className="bg-primary py-16">
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
                    <div className="flex justify-center md:justify-start m-auto w-fit space-x-4">
                        <Button variant="secondary" size="small" onClick={scrollToSection('contact')}>
                            <div className="flex gap-2">
                                Get in Touch <IconMail className="mr-2" size={20}/>
                            </div>
                        </Button>
                        <Button variant="outline" size="large">
                            <div className="flex gap-2">
                                Download PDF <IconFileDownload className="mr-2" size={20}/>
                            </div>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;