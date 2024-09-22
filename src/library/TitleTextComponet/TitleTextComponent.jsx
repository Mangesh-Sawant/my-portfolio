import React from 'react';

const TitleTextComponent = ({title}) => {
    return (
        <h2 className="text-4xl font-bold text-accent-primary mb-8 text-center">{title}</h2>
    );
};

export default TitleTextComponent;