import ReactModal from 'react-modal';
import { useEffect } from 'react';

const ImageModal = ({ isOpen, onRequestClose, imageUrl }) => {
    useEffect(() => {

        ReactModal.setAppElement('#root');

        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                onRequestClose();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onRequestClose]);

    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            shouldCloseOnOverlayClick={true}
            className="Modal"
            overlayClassName="Overlay"
        >
            <img
                src={imageUrl}
                alt="Full size"
                style={{ maxWidth: '100%', maxHeight: '90vh' }}
            />
        </ReactModal>
    );
};

export default ImageModal;