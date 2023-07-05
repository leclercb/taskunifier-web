import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { sendMail } from 'actions/MailActions';

export function useMailApi() {
    const dispatch = useDispatch();

    const sendMailCallback = useCallback(
        (email, subject, msg) => dispatch(sendMail(email, subject, msg)),
        [dispatch]
    );

    return {
        sendMail: sendMailCallback
    };
}