import React from 'react';
import { Col } from 'antd';
import PropTypes from 'prop-types';
import Element from 'components/common/Element';
import Icon from 'components/common/Icon';
import Translations from 'constants/Translations';

const FeatureElement = ({ number }) => {
    const translations = Translations;

    return (
        <Col xs={24} sm={12}>
            <Element
                image={(
                    <Icon
                        icon={translations[`feature_${number}_icon`]}
                        color="#0e67c4" />
                )}
                title={translations[`feature_${number}_title`]}
                content={translations[`feature_${number}_text`]} />
        </Col>
    );
};

FeatureElement.propTypes = {
    number: PropTypes.number.isRequired
};

export default FeatureElement;