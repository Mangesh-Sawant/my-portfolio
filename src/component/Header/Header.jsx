import React, { useState } from 'react';
import DarkModeToggle from '../../library/DarkModeButton/DarkModeButton.jsx';
import '../../index.css';

const Header = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const SCROLL_OFFSET = 100;

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        if (isDarkMode) {
            document.documentElement.removeAttribute('web-theme');
        } else {
            document.documentElement.setAttribute('web-theme', 'dark');
        }
    };

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
        <header className="bg-secondary py-4 px-6 shadow-md fixed top-0 left-0 right-0 z-50">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-primary text-2xl font-bold">
                    <span className="text-accent-primary">M</span>angesh Sawant
                </div>
                <div className="flex items-center space-x-6">
                    <nav>
                        <ul className="flex space-x-6">
                            <li>
                                <button onClick={scrollToSection('about')}
                                        className="text-primary hover:text-accent-primary transition duration-300">
                                    About
                                </button>
                            </li>
                            <li>
                                <button onClick={scrollToSection('portfolio')}
                                        className="text-primary hover:text-accent-primary transition duration-300">
                                    Projects
                                </button>
                            </li>
                            <li>
                                <button onClick={scrollToSection('skills')}
                                        className="text-primary hover:text-accent-primary transition duration-300">
                                    Skills
                                </button>
                            </li>
                            <li>
                                <button onClick={scrollToSection('tools')}
                                        className="text-primary hover:text-accent-primary transition duration-300">
                                    Tools
                                </button>
                            </li>
                            <li>
                                <button onClick={scrollToSection('contact')}
                                        className="text-primary hover:text-accent-primary transition duration-300">
                                    Contact Me
                                </button>
                            </li>
                        </ul>
                    </nav>
                    <DarkModeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme}/>
                </div>
            </div>
        </header>
    );
};

export default Header;