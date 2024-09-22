import React from 'react';
import TitleTextComponent from '../../library/TitleTextComponet/TitleTextComponent.jsx';
import surbhiDocumentImage from '../../assets/project/surbhi-document.png'
import youtubeCloneImage from '../../assets/project/youtube-clone.jpeg'
import talenlioImage from '../../assets/project/talenlio.png'
import Button from "../../library/Button/Button.jsx";

const projects = [
    {
        id: 1,
        title: "Surbhi Document",
        description: "Digital document store for personal use.",
        image: surbhiDocumentImage,
        link: "https://surbhi-documentation.web.app/dashboard"
    },
    {
        id: 2,
        title: "YouTube Clone",
        description: "Create Youtube Clone Using React and material UI.",
        image: youtubeCloneImage,
        link: "https://project-two-link.com"
    },
    {
        id: 3,
        title: "Talenlio",
        description: "Talenlio is an AI-powered platform that helps you create standout resumes that are 100% optimized for ATS.",
        image: talenlioImage,
        link: "https://app.talenlio.com/"
    }
];

const handleClick = (url) => {
    window.open(url, "_blank")
};

const ProjectCard = ({project}) => (
    <div
        className="relative bg-secondary rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:scale-105 border-solid-2 group">
        <div className="h-48 flex items-center justify-center overflow-hidden">
            <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-center"
            />
        </div>
        <div className="p-6">
            <h3 className="text-xl font-semibold text-primary mb-2">{project.title}</h3>
            <p className="text-text-secondary mb-4 truncate">{project.description}</p>
            <Button onClick={() => handleClick(project.link)} variant="outline" size="large">
                View Project
            </Button>
        </div>
        <div
            className="absolute inset-0 backdrop-filter backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="p-6 max-w-xs text-primary bg-secondary rounded-xl border-2 border-white">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm mb-4">{project.description}</p>
                <Button onClick={() => handleClick(project.link)} variant="secondary" size="large">
                    View Project
                </Button>
            </div>
        </div>
    </div>
);

const Portfolio = () => {
    return (
        <section id="portfolio" className="bg-primary py-16">
            <div className="container mx-auto px-4">
                <TitleTextComponent title="My Projects"/>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map(project => (
                        <ProjectCard key={project.id} project={project}/>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;