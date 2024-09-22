import React, { useState, useEffect } from 'react';

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updateCursorPosition = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const updateHoverStatus = (e) => {
            const target = e.target;

            // Check if the element is interactive (button, link, etc.)
            const isInteractiveElement =
                target.tagName.toLowerCase() === 'button' ||
                target.tagName.toLowerCase() === 'a' ||
                target.getAttribute('role') === 'button' ||
                target.getAttribute('type') === 'submit' ||
                ['input', 'textarea', 'select'].includes(target.tagName.toLowerCase());

            setIsHovering(isInteractiveElement);
        };

        // Add event listeners for cursor movement and hover detection
        window.addEventListener('mousemove', updateCursorPosition);
        document.addEventListener('mouseover', updateHoverStatus);

        // Cleanup on component unmount
        return () => {
            window.removeEventListener('mousemove', updateCursorPosition);
            document.removeEventListener('mouseover', updateHoverStatus);
        };
    }, []);

    // Cursor size based on hover state
    const dotSize = isHovering ? 3 : 5;
    const circleSize = isHovering ? 50 : 30;

    return (
        <>
            <div
                className={`cursor-dot ${isHovering ? 'hovering' : ''}`}
                style={{
                    left: `${position.x - dotSize / 2}px`,
                    top: `${position.y - dotSize / 2}px`,
                    width: `${dotSize}px`,
                    height: `${dotSize}px`
                }}
            />
            <div
                className={`cursor-circle ${isHovering ? 'hovering' : ''}`}
                style={{
                    left: `${position.x - circleSize / 2}px`,
                    top: `${position.y - circleSize / 2}px`,
                    width: `${circleSize}px`,
                    height: `${circleSize}px`
                }}
            />
        </>
    );
};

export default CustomCursor;
