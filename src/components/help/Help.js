import React from 'react';
import { Col, Row } from 'antd';
import Block from 'components/common/Block';
import BlockContent from 'components/common/BlockContent';
import Element from 'components/common/Element';
import Icon from 'components/common/Icon';
import Translations from 'constants/Translations';

function Help() {
    const translations = Translations;

    return (
        <Block color="white">
            <BlockContent>
                <Row gutter={40}>
                    <Col xs={24} sm={12}>
                        <Element
                            head={true}
                            title={translations.help_title}
                            content={translations.help_text} />
                    </Col>
                    <Col xs={24} sm={12}>
                        <Element image={<Icon icon="question-circle" />} />
                    </Col>
                </Row>
            </BlockContent>
        </Block>
    );
}

export default Help;