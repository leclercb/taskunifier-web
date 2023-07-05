import React, { useState } from 'react';
import { Button, Col, Form, Input, Row, Spin } from 'antd';
import Block from 'components/common/Block';
import BlockContent from 'components/common/BlockContent';
import Element from 'components/common/Element';
import Icon from 'components/common/Icon';
import Translations from 'constants/Translations';
import { useMailApi } from 'hooks/UseMailApi';
import { getDefaultFormItemLayout, getDefaultTailFormItemLayout } from 'utils/FormUtils';

function ContactUs() {
    const mailApi = useMailApi();
    const [busy, setBusy] = useState(false);
    const [form] = Form.useForm();

    const onSubmit = async () => {
        try {
            const values = await form.validateFields();

            try {
                setBusy(true);
                await mailApi.sendMail(
                    values.email,
                    values.subject,
                    values.message);
            } finally {
                setBusy(false);
            }
        } catch (error) {
            // Skip
        }
    };

    const translations = Translations;

    const formItemLayout = getDefaultFormItemLayout();
    const tailFormItemLayout = getDefaultTailFormItemLayout();

    return (
        <React.Fragment>
            <Block color="white">
                <BlockContent>
                    <Row gutter={40}>
                        <Col xs={24} sm={12}>
                            <Element
                                head={true}
                                title={translations.contact_us_title}
                                content={translations.contact_us_text} />
                        </Col>
                        <Col xs={24} sm={12}>
                            <Element image={<Icon icon={['far', 'envelope']} />} />
                        </Col>
                    </Row>
                </BlockContent>
            </Block>
            <Spin spinning={busy}>
                <Block color="white">
                    <BlockContent>
                        <Form form={form} {...formItemLayout}>
                            <Form.Item
                                name="subject"
                                label="Subject"
                                rules={[
                                    {
                                        required: true,
                                        message: 'The subject is required'
                                    }
                                ]}>
                                <Input />
                            </Form.Item>
                            <Form.Item
                                name="email"
                                label="Email"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Your email is required'
                                    },
                                    {
                                        type: 'email',
                                        message: 'Your email is invalid'
                                    }
                                ]}>
                                <Input />
                            </Form.Item>
                            <Form.Item
                                name="message"
                                label="Message"
                                rules={[
                                    {
                                        required: true,
                                        message: 'The message is required'
                                    }
                                ]}>
                                <Input.TextArea rows={5} />
                            </Form.Item>
                            <Form.Item {...tailFormItemLayout}>
                                <Button onClick={onSubmit}>
                                    Send
                                </Button>
                            </Form.Item>
                        </Form>
                    </BlockContent>
                </Block>
            </Spin>
        </React.Fragment>
    );
}

export default ContactUs;