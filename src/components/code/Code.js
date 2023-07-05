import React, { useRef } from 'react';
import { Col, Row, message } from 'antd';
import PropTypes from 'prop-types';
import Block from 'components/common/Block';
import BlockContent from 'components/common/BlockContent';
import Element from 'components/common/Element';
import Icon from 'components/common/Icon';
import Translations from 'constants/Translations';
import './Code.css';

function Code({ code }) {
    const inputRef = useRef(null);

    const onCopyToClipboard = () => {
        inputRef.current.select();
        inputRef.current.setSelectionRange(0, 99999);
        document.execCommand('copy');
        message.info('Code copied to clipboard');
    };

    const translations = Translations;

    return (
        <Block color="blue">
            <BlockContent>
                <Row gutter={40}>
                    <Col xs={24} sm={12}>
                        <Element
                            head={true}
                            title={translations.oauth_token_title}
                            content={translations.oauth_token_text} />
                    </Col>
                    <Col xs={24} sm={12}>
                        <Element image={<Icon icon="barcode" />} />
                    </Col>
                </Row>
                <input
                    ref={inputRef}
                    type="text"
                    value={code}
                    onClick={onCopyToClipboard}
                    className="stealth"
                    readOnly />
                <br />
                <span style={{ fontSize: 11 }}>Click on the code to copy it</span>
            </BlockContent>
        </Block>
    );
}

Code.propTypes = {
    code: PropTypes.string.isRequired
};

export default Code;