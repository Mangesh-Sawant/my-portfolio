import React from 'react';
import {IconMoon, IconSun} from '@tabler/icons-react';

const DarkModeToggle = ({isDarkMode, toggleTheme}) => {
    return (
        <div className="relative inline-block w-[55px] h-[30px] border-2 border-gray-200 rounded-3xl">
            <input type="checkbox"
                   className="opacity-0 w-0 h-0"
                   id="darkmode-toggle"
                   checked={isDarkMode}
                   onChange={toggleTheme}
            />
            <label htmlFor="darkmode-toggle"
                   className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-secondary rounded-full transition-all duration-300 ease-in-out flex items-center justify-between px-1">
                <IconMoon role="button" size={16} className="text-accent-primary"/>
                <IconSun role="button" size={16} className="text-accent-secondary"/>
                <span role="button" className={`absolute w-[22px] h-[22px] left-[2px] bottom-[2px] bg-primary rounded-full transition-all duration-300 ease-in-out
                        ${isDarkMode ? 'transform translate-x-[24px]' : ''}`}
                ></span>
            </label>
        </div>
    );
};

export default DarkModeToggle;