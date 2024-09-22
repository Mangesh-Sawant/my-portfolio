import React from 'react';
import { IconBrandLinkedin, IconBrandGithub } from '@tabler/icons-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-secondary py-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <p className="text-primary text-sm mb-4 md:mb-0">
                        © {currentYear} Mangesh Sawant. All rights reserved.
                    </p>
                    <div className="flex space-x-4">
                        <a
                            href="https://www.linkedin.com/in/mangesh-sawant-47554024a/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:text-accent-primary transition-colors duration-300"
                        >
                            <IconBrandLinkedin size={24} />
                        </a>
                        <a
                            href="https://github.com/Mangesh-Sawant"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:text-accent-primary transition-colors duration-300"
                        >
                            <IconBrandGithub size={24} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;