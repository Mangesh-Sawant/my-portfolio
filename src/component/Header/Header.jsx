import { useState } from 'react';
import '../../index.css';

const Header = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        if (isDarkMode) {
            document.documentElement.removeAttribute('web-theme');
        } else {
            document.documentElement.setAttribute('web-theme', 'dark');
        }
    };

    return (
        <header className="bg-secondary py-4 px-6 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                {/* Name/Logo on the left */}
                <div className="text-primary text-2xl font-bold">
                    <span className="text-accent-primary">Y</span>our Name
                </div>

                {/* Navigation tabs and theme toggle button on the right */}
                <div className="flex items-center space-x-6">
                    <nav>
                        <ul className="flex space-x-6">
                            <li><a href="#about" className="text-primary hover:text-accent-primary transition duration-300">About</a></li>
                            <li><a href="#portfolio" className="text-primary hover:text-accent-primary transition duration-300">Portfolio</a></li>
                            <li><a href="#skills" className="text-primary hover:text-accent-primary transition duration-300">Skills</a></li>
                            <li><a href="#contact" className="text-primary hover:text-accent-primary transition duration-300">Contact</a></li>
                        </ul>
                    </nav>
                    <button
                        onClick={toggleTheme}
                        className="bg-accent-primary text-white px-4 py-2 rounded-full hover:bg-accent-secondary transition duration-300"
                    >
                        {isDarkMode ? 'Light' : 'Dark'}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;