import React from 'react';
import { Col, Row } from 'antd';
import Block from 'components/common/Block';
import BlockContent from 'components/common/BlockContent';
import Element from 'components/common/Element';
import Icon from 'components/common/Icon';
import Translations from 'constants/Translations';

function AboutUs() {
    const translations = Translations;

    return (
        <Block color="white">
            <BlockContent>
                <Row gutter={40}>
                    <Col xs={24} sm={12}>
                        <Element
                            head={true}
                            title={translations.about_us_title}
                            content={translations.about_us_text} />
                    </Col>
                    <Col xs={24} sm={12}>
                        <Element image={<Icon icon="code" />} />
                    </Col>
                </Row>
            </BlockContent>
        </Block>
    );
}

export default AboutUs;