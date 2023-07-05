import React from 'react';
import PropTypes from 'prop-types';

function Paragraph({ level, title, children }) {
    const getTitleElement = () => {
        switch (level) {
            case 1:
                return (<h1>{title}</h1>);
            case 2:
                return (<h2>{title}</h2>);
            case 3:
                return (<h3>{title}</h3>);
            case 4:
                return (<h4>{title}</h4>);
            case 5:
                return (<h5>{title}</h5>);
            default:
                return null;
        }
    };

    return (
        <div className="paragraph">
            {getTitleElement()}
            {children}
        </div>
    );
}

Paragraph.propTypes = {
    level: PropTypes.oneOf([1, 2, 3, 4, 5]).isRequired,
    title: PropTypes.node,
    children: PropTypes.node
};

export default Paragraph;