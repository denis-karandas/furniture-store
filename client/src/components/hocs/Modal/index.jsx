import React, { useEffect, useReducer } from 'react';
import { createPortal } from 'react-dom';

import './Modal.scss';

const Modal = ({ children, id, isOpen, onClose }) => {
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'scroll';
    }, [isOpen]);

    if (!isOpen) {
        return;
    }

    return createPortal(
        <div id={id} className="modal">
            <div
                className="modal__background"
                onClick={onClose}
            />
            <div className="modal__content">
                {children}
            </div>
        </div>,
        document.body
    );
}

export default Modal;
