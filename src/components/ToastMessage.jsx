import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToastMessage = () => {
    const showSuccessNotification = () => {
        toast.success('File successfully uploaded', { position: toast.POSITION.BOTTOM_LEFT })
    }

    return (
        <div>
            <button onClick={showSuccessNotification}>Click me!</button>
            <ToastContainer />
        </div>
    );
}

export default ToastMessage;