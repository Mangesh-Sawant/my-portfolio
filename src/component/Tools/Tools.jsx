// Tools.jsx
import React from 'react';
import TitleTextComponent from '../../library/TitleTextComponet/TitleTextComponent.jsx';
import CircularCard from '../../library/CircularCardComponent/CircularCardComponent.jsx';
import {
    IconBrandVscode,
    IconBrandGit,
    IconBrandWebflow,
    IconClipboardList,
    IconBrandSlack,
    IconBrandGitlab,
    IconBrandFigma,
    IconUserCircle
} from '@tabler/icons-react';

const iconMap = {
    VSCode: <IconBrandVscode size={48} />,
    Git: <IconBrandGit size={48} />,
    WebStorm: <IconBrandWebflow size={48} />,
    ClickUp: <IconClipboardList size={48} />,
    Slack: <IconBrandSlack size={48} />,
    GitLab: <IconBrandGitlab size={48} />,
    Figma: <IconBrandFigma size={48} />,
    Keka: <IconUserCircle size={48} />
};

const tools = [
    { name: 'VSCode' },
    { name: 'Git' },
    { name: 'WebStorm' },
    { name: 'ClickUp' },
    { name: 'Slack' },
    { name: 'GitLab' },
    { name: 'Figma' },
    { name: 'Keka' }
];

const Tools = () => {
    return (
        <section className="bg-primary py-16">
            <div className="container mx-auto px-4">
                <TitleTextComponent title="Tools I Use" />
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                    {tools.map((tool, index) => (
                        <CircularCard
                            key={index}
                            card={tool}
                            icon={iconMap[tool.name]}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Tools;