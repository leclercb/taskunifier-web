import React from 'react';
import PropTypes from 'prop-types';

function Block({ color, children }) {
    return (
        <div className={`block ${color}`}>
            {children}
        </div>
    );
}

Block.propTypes = {
    color: PropTypes.oneOf(['blue', 'white']).isRequired,
    children: PropTypes.node.isRequired
};

export default Block;