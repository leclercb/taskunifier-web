import React from 'react';
import PropTypes from 'prop-types';

function Spacer({ size }) {
    return (
        <span style={{ marginRight: size ? size : 10 }}>&nbsp;</span>
    );
}

Spacer.propTypes = {
    size: PropTypes.number
};

export default Spacer;