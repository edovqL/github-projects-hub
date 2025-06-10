import { FC } from 'react';

import { ModalProps } from './types';

const Modal: FC<ModalProps> = ({ onClose, children }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-[15%] flex items-center justify-center z-50">
            {/* Modal content */}
            <div
                className="bg-white rounded-lg w-2/5 relative shadow-lg max-h-[90vh] overflow-y-auto p-4 scrollbar-thin"
                role="dialog"
                aria-modal="true"
            >
                {/* Close button */}
                <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700" aria-label="Close">
                    &times;
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
