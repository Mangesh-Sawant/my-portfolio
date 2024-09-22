import React from 'react';

const ScrollDownIndicator = () => {
    return (
        <a className="block">
            <div className="relative w-10 h-16">
                {[1, 2, 3].map((_, index) => (
                    <span
                        role="button"
                        key={index}
                        className={`
              absolute w-5 h-5 border-r-2 border-b-2 scroll-indicator-color
              transform rotate-45 animate-scrollDown
              ${index === 1 ? 'animation-delay-200' : ''}
              ${index === 2 ? 'animation-delay-400' : ''}
            `}
                        style={{top: `${index * 8}px`}}
                    />
                ))}
            </div>
        </a>
    );
};

export default ScrollDownIndicator;