import React from 'react';
import PropTypes from 'prop-types';

function BlockTitle({ children, className }) {
    return (
        <div className={'block-title ' + className}>
            {children}
        </div>
    );
}

BlockTitle.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
};

export default BlockTitle;