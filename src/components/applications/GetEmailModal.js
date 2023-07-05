import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Modal } from 'antd';
import { getDefaultFormItemLayout } from 'utils/FormUtils';

function GetEmailModal({ visible, onOk, onCancel }) {
    const [form] = Form.useForm();

    const onValidate = async () => {
        try {
            const values = await form.validateFields();
            onOk(values.user, values.email);
        } catch (error) {
            // Skip
        }
    };

    const formItemLayout = getDefaultFormItemLayout();

    return (
        <Modal
            visible={visible}
            closable={false}
            onOk={onValidate}
            onCancel={onCancel}>
            <Form form={form} {...formItemLayout}>
                <Form.Item
                    name="email"
                    label="Email"
                    rules={[
                        {
                            required: true,
                            message: 'The email is required'
                        },
                        {
                            type: 'email',
                            message: 'The email is invalid'
                        }
                    ]}>
                    <Input />
                </Form.Item>
            </Form>
        </Modal>
    );
}

GetEmailModal.propTypes = {
    visible: PropTypes.bool.isRequired,
    onOk: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired
};

export default GetEmailModal;