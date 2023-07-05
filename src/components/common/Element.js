import React from 'react';
import PropTypes from 'prop-types';

function Element({ image, head, title, content }) {
    return (
        <div className="element">
            {image && (
                <div className={(title || content) ? 'image-small' : 'image-big'}>
                    {image}
                </div>
            )}
            {(title || content) && (
                <div className="text">
                    <div className={'element-title' + (head ? '' : ' small')}>{title}</div>
                    {typeof content === 'string' ? (
                        <span dangerouslySetInnerHTML={{ __html: content }} />
                    ) : content}
                </div>
            )}
        </div>
    );
}

Element.propTypes = {
    image: PropTypes.node,
    head: PropTypes.bool,
    title: PropTypes.node,
    content: PropTypes.node
};

export default Element;