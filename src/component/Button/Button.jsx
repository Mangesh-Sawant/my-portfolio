import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
                    children,
                    onClick,
                    variant = 'primary',
                    size = 'medium',
                    className = '',
                    disabled = false
                }) => {
    const baseStyles = 'font-bold rounded transition-colors duration-300 focus:outline-none';

    const variants = {
        primary: 'bg-accent-primary text-white hover:bg-accent-secondary',
        secondary: 'bg-secondary text-primary hover:bg-primary hover:text-secondary',
        outline: 'bg-transparent border-2 border-accent-primary text-accent-primary hover:bg-accent-primary hover:text-white'
    };

    const sizes = {
        small: 'px-3 py-1 text-sm w-fit',
        medium: 'px-4 py-2 text-base',
        large: 'px-6 py-3 text-lg w-full'
    };

    const buttonStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    return (
        <button className={buttonStyles}
                onClick={onClick}
                disabled={disabled}>
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    variant: PropTypes.oneOf(['primary', 'secondary', 'outline']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    className: PropTypes.string,
    disabled: PropTypes.bool
};

export default Button;