// Skills.jsx
import React from 'react';
import TitleTextComponent from '../../library/TitleTextComponet/TitleTextComponent.jsx';
import CircularCard from '../../library/CircularCardComponent/CircularCardComponent.jsx';
import {
    IconApi,
    IconBrandAngular,
    IconBrandCss3,
    IconBrandFirebase,
    IconBrandHtml5,
    IconBrandJavascript,
    IconBrandNodejs, IconBrandPython,
    IconBrandReact, IconCode,
    IconDatabase
} from '@tabler/icons-react';

const iconMap = {
    React: <IconBrandReact size={48}/>,
    JavaScript: <IconBrandJavascript size={48}/>,
    'HTML/CSS': <IconBrandHtml5 size={48}/>,
    Angular: <IconBrandAngular size={48}/>,
    SQL: <IconDatabase size={48}/>,
    TailwindCSS: <IconBrandCss3 size={48}/>,
    Firebase: <IconBrandFirebase size={48}/>,
    'Node.js': <IconBrandNodejs size={48}/>,
    Python: <IconBrandPython size={48} />,
    FastApi: <IconApi size={48} />,
    Jinja: <IconCode size={48} />
};

const skills = [
    {name: 'JavaScript'},
    {name: 'HTML/CSS'},
    {name: 'Angular'},
    {name: 'SQL'},
    {name: 'TailwindCSS'},
    {name: 'Firebase'},
    {name: 'Node.js'},
    {name: 'Python'},
    {name: 'FastApi'},
    {name: 'Jinja'}
];

const Skills = () => {
    return (
        <section data-aos="fade-up" id="skills" className="bg-primary py-16">
            <div className="container mx-auto px-4">
                <TitleTextComponent title="Skills"/>
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