import axios from 'axios';
import { message } from 'antd';
import { getConfig } from 'config/Config';
import { showError } from 'utils/ErrorUtils';

export function sendMail(email, subject, msg) {
    return async () => {
        try {
            await axios({
                method: 'POST',
                url: `${getConfig().apiUrl}/v1/mails`,
                data: {
                    email,
                    subject,
                    message: msg
                },
                responseType: 'json'
            });

            message.success('The email has been successfully sent !');
        } catch (error) {
            showError('The email has not been sent !', error);
            throw error;
        }
    };
}