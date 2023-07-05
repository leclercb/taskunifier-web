import React from 'react';
import { Col, Row } from 'antd';
import Plans from 'components/applications/Plans';
import Block from 'components/common/Block';
import BlockContent from 'components/common/BlockContent';
import BlockTitle from 'components/common/BlockTitle';
import Element from 'components/common/Element';
import Icon from 'components/common/Icon';
import { getConfig } from 'config/Config';
import Translations from 'constants/Translations';

function TaskUnifierCloud() {
    const translations = Translations;

    return (
        <React.Fragment>
            <Block color="white">
                <BlockContent>
                    <Row gutter={40}>
                        <Col xs={24} sm={12}>
                            <Element
                                head={true}
                                title={translations.cloud_title}
                                content={translations.cloud_text} />
                        </Col>
                        <Col xs={24} sm={12}>
                            <Element image={<Icon icon="cloud" />} />
                        </Col>
                    </Row>
                </BlockContent>
            </Block>
            <Block color="white">
                <BlockTitle>{translations.base_plans}</BlockTitle>
                <BlockContent>
                    <Plans />
                    <a href={getConfig().cloudUrl} className="main-link big" style={{ marginTop: 30 }}>
                        {translations.cloud_create_account}
                    </a>
                </BlockContent>
            </Block>
        </React.Fragment>
    );
}

export default TaskUnifierCloud;