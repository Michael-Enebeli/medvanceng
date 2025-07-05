import React from 'react';
import { createRoot } from 'react-dom/client';
import Modal from '@/global/components/Modal';

const SuccessModal = ({ onClose }) => {
  return (
    <Modal isOpen={true} onClose={onClose}>
      <div style={{ textAlign: 'center', fontSize: '0.825rem' }}>
        <svg width="64" height="64" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
          <circle cx="25" cy="25" r="25" fill="var(--sub)" />
          <path d="M15 25L22 32L35 19" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
        <h2 style={{ marginTop: '0rem', color: 'var(--sub)' }}>Success!</h2>
        <p>Your payment was successful and a copy of this transaction has been sent to your mail.</p>
      </div>
    </Modal>
  );
};

SuccessModal.show = () => {
  let modalRoot = document.getElementById("modal-root");

  if (!modalRoot) {
    modalRoot = document.createElement("div");
    modalRoot.id = "modal-root";
    document.body.appendChild(modalRoot);
  }

  const modal = document.createElement("div");
  modalRoot.appendChild(modal);

  const root = createRoot(modal);

  const handleClose = () => {
    root.unmount();
    modalRoot.removeChild(modal);
  };

  root.render(<SuccessModal onClose={handleClose} />);
};

export default SuccessModal;