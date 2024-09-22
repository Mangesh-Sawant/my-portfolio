import React from 'react';
import TitleTextComponent from "../../library/TitleTextComponet/TitleTextComponent.jsx";
import Button from "../../library/Button/Button.jsx";
import {IconMail, IconFileDownload} from '@tabler/icons-react';
import myResume from "../../assets/MangeshSawant-Resume-New.pdf";

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

    const handleDownload = () => {
        window.open(myResume, '_blank');
    };

    return (
        <section id="about" className="bg-primary py-16">
            <div className="flex w-full flex-col mx-auto px-4">
                <TitleTextComponent title="About Me"></TitleTextComponent>
                <div className="md:w-2/3 md:pl-8 w-full m-auto">
                    <p className="text-text-primary mb-4 text-center">
                        Hello! I'm Mangesh, an enthusiastic Front-End Developer with 1.5 years of experience in
                        building engaging and user-friendly websites. I specialize in creating responsive and
                        interactive web interfaces that enhance user experience. My passion lies in crafting
                        clean, efficient code and designing intuitive layouts that bring ideas to life on the
                        digital canvas. As a team player, I thrive on collaborating with others to deliver
                        high-quality projects on schedule.
                    </p>
                    <p className="text-text-primary mb-6 text-center">
                        I'm constantly exploring new web technologies and
                        design trends to stay at the forefront of modern web development practices.
                    </p>
                    <div className="flex justify-center md:justify-start m-auto w-fit space-x-4 flex-col sm:flex-row gap-4 items-center">
                        <Button variant="secondary" size="medium" onClick={scrollToSection('contact')}>
                            <div role="button" className="flex gap-2 items-center">
                                Get in Touch <IconMail role="button" className="mr-2" size={20}/>
                            </div>
                        </Button>
                        <Button variant="outline" size="large" onClick={()=>{handleDownload()}}>
                            <div role="button" className="flex gap-2 whitespace-nowrap items-center">
                                Download PDF <IconFileDownload role="button" className="mr-2" size={20}/>
                            </div>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;