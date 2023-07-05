import React from 'react';
import PropTypes from 'prop-types';

function BlockContent({ align, style, children }) {
    return (
        <div
            className="block-content"
            style={{
                textAlign: align || 'center',
                ...style
            }}>
            {children}
        </div>
    );
}

BlockContent.propTypes = {
    align: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.node.isRequired
};

export default BlockContent;