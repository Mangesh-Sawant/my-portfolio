// Skills.jsx
import React from 'react';
import TitleTextComponent from '../../library/TitleTextComponet/TitleTextComponent.jsx';
import CircularCard from '../../library/CircularCardComponent/CircularCardComponent.jsx';
import {
    IconBrandReact,
    IconBrandJavascript,
    IconBrandHtml5,
    IconBrandCss3,
    IconBrandAngular,
    IconDatabase,
    IconBrandFirebase,
    IconBrandNodejs
} from '@tabler/icons-react';

const iconMap = {
    React: <IconBrandReact size={48} />,
    JavaScript: <IconBrandJavascript size={48} />,
    'HTML/CSS': <IconBrandHtml5 size={48} />,
    Angular: <IconBrandAngular size={48} />,
    SQL: <IconDatabase size={48} />,
    TailwindCSS: <IconBrandCss3 size={48} />,
    Firebase: <IconBrandFirebase size={48} />,
    'Node.js': <IconBrandNodejs size={48} />
};

const skills = [
    { name: 'React' },
    { name: 'JavaScript' },
    { name: 'HTML/CSS' },
    { name: 'Angular' },
    { name: 'SQL' },
    { name: 'TailwindCSS' },
    { name: 'Firebase' },
    { name: 'Node.js' }
];

const Skills = () => {
    return (
        <section className="bg-primary py-16">
            <div className="container mx-auto px-4">
                <TitleTextComponent title="My Skills" />
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <CircularCard
                            key={index}
                            card={skill}
                            icon={iconMap[skill.name]}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;