// CircularCard.jsx
import React from 'react';
import PropTypes from 'prop-types';

const CircularCard = ({ skill, icon, index }) => {
    return (
        <div className="flex flex-col items-center justify-center p-2">
            <div className={`w-32 h-32 bg-secondary text-primary rounded-full flex flex-col items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 hover:bg-accent-primary hover:text-white group ${index % 2 === 0 ? 'animate-float' : 'animate-float-delay'}`}>
                <div className="mb-2">{icon}</div>
                <span className="text-sm font-bold text-center px-2 truncate max-w-full">
                    {skill.name}
                </span>
            </div>
        </div>
    );
};

CircularCard.propTypes = {
    skill: PropTypes.shape({
        name: PropTypes.string.isRequired,
    }).isRequired,
    icon: PropTypes.element.isRequired,
    index: PropTypes.number.isRequired,
};

export default CircularCard;