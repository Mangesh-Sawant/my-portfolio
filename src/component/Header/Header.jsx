import React, { useState, useEffect } from 'react';
import DarkModeToggle from '../../library/DarkModeButton/DarkModeButton.jsx';
import { IconMenu2, IconX } from '@tabler/icons-react';
import '../../index.css';

const Header = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const SCROLL_OFFSET = 60;

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
        setIsMenuOpen(false);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navItems = [
        { id: 'about', label: 'About' },
        { id: 'skills', label: 'Skills' },
        { id: 'portfolio', label: 'Projects' },
        { id: 'tools', label: 'Tools' },
        { id: 'contact', label: 'Contact Me' },
    ];

    useEffect(() => {
        const controlNavbar = () => {
            if (typeof window !== 'undefined') {
                if (window.scrollY > lastScrollY && window.scrollY > 100) {
                    setIsVisible(false);
                } else {
                    setIsVisible(true);
                }
                setLastScrollY(window.scrollY);
            }
        };

        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar);
            return () => {
                window.removeEventListener('scroll', controlNavbar);
            };
        }
    }, [lastScrollY]);

    return (
        <header className={`bg-secondary py-4 px-6 shadow-md fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className="container mx-auto flex justify-between items-center">
                <button className="text-primary text-2xl font-bold cursor-pointer"
                        onClick={scrollToSection('hero')}>
                    MS.
                </button>
                <div className="flex items-center space-x-6">
                    <nav className="hidden md:block">
                        <ul className="flex space-x-6">
                            {navItems.map((item) => (
                                <li key={item.id}>
                                    <button
                                        onClick={scrollToSection(item.id)}
                                        className="text-primary hover:text-accent-primary transition duration-300"
                                    >
                                        {item.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <DarkModeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme}/>
                    <button
                        className="md:hidden text-primary hover:text-accent-primary transition duration-300"
                        onClick={toggleMenu}
                    >
                        {isMenuOpen ? <IconX size={24}/> : <IconMenu2 size={24}/>}
                    </button>
                </div>
            </div>
            <div
                className={`md:hidden bg-secondary overflow-hidden transition-all duration-300 ease-in-out ${
                    isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
            >
                <nav className="py-4">
                    <ul className="flex flex-col space-y-4">
                        {navItems.map((item, index) => (
                            <li
                                key={item.id}
                                className={`transition-all duration-300 ${
                                    isMenuOpen ? 'animate-slideIn' : 'animate-slideOut'
                                }`}
                                style={{animationDelay: `${index * 50}ms`}}
                            >
                                <button
                                    onClick={scrollToSection(item.id)}
                                    className="text-primary hover:text-accent-primary transition duration-300 w-full text-left px-6 py-2"
                                >
                                    {item.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;