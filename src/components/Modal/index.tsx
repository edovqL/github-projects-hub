import { FC, useEffect } from 'react';

import { ModalProps } from './types';

const Modal: FC<ModalProps> = ({ onClose, children }) => {
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        // Cleanup the event listener on unmount
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [onClose]);

    return (
        <div className="fixed inset-0 bg-black bg-opacity-[15%] flex items-center justify-center z-50">
            {/* Modal content */}
            <div
                className="bg-black rounded-lg lg:w-4/5 md:w-4/5 xl:w-2/5 relative shadow-lg max-h-[90vh] overflow-y-auto p-8 scrollbar-thin"
                role="dialog"
                aria-modal="true"
            >
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-1 right-2 text-3xl font-semibold text-gray-500 hover:text-gray-700"
                    aria-label="Close"
                >
                    &times;
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
