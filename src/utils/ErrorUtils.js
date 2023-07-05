import React from 'react';
import { Modal, notification } from 'antd';

export function showError(title, error) {
    notification.error({
        message: title,
        description: error.toString()
    });

    const content = error.response && error.response.data ? error.response.data : error;

    Modal.error({
        title,
        content: (
            <div>
                <pre>
                    {JSON.stringify(content, null, 2)}
                </pre>
            </div>
        ),
        width: 800
    });
}