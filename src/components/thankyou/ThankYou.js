import React from 'react';
import { Col, Row } from 'antd';
import PropTypes from 'prop-types';
import Block from 'components/common/Block';
import BlockContent from 'components/common/BlockContent';
import Element from 'components/common/Element';
import Icon from 'components/common/Icon';
import Translations from 'constants/Translations';

function ThankYou({ trial }) {
    const translations = Translations;

    return (
        <Block color="red">
            <BlockContent>
                <Row gutter={40}>
                    <Col xs={24} sm={12}>
                        <Element
                            head={true}
                            title={translations.thankyou_title}
                            content={trial ? translations.thankyou_text_trial : translations.thankyou_text_purchase} />
                    </Col>
                    <Col xs={24} sm={12}>
                        <Element image={<Icon icon="smile" />} />
                    </Col>
                </Row>
            </BlockContent>
        </Block>
    );
}

ThankYou.propTypes = {
    trial: PropTypes.bool
};

export default ThankYou;