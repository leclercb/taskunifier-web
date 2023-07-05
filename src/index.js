import React from 'react';
import { notification } from 'antd';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from 'App';
import { store } from 'store/Store';
import 'index.css';

window.addEventListener('error', function (e) {
    notification.error({
        message: 'An error occurred',
        description: e.error.message
    });

    return false;
});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));