import React from 'react';
import { Tooltip } from 'antd';
import PropTypes from 'prop-types';
import Icon from 'components/common/Icon';

const EditionElement = ({ icon, title, tooltip, pro, index }) => {
    return (
        <Tooltip title={tooltip} placement="left">
            <tr className={index % 2 === 0 ? 'even' : 'odd'}>
                <td><Icon icon={icon} /></td>
                <td>{title}</td>
                <td>
                    {typeof pro === 'boolean' && pro && (<Icon icon="check-circle" />)}
                    {typeof pro === 'number' && (<span style={{ fontWeight: 'bold' }}>{pro}</span>)}
                </td>
            </tr>
        </Tooltip>
    );
};

EditionElement.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tooltip: PropTypes.string.isRequired,
    pro: PropTypes.oneOfType([
        PropTypes.bool.isRequired,
        PropTypes.number.isRequired
    ]).isRequired,
    index: PropTypes.number.isRequired
};

export default EditionElement;