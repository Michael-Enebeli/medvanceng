import React, { useEffect, useState } from 'react';
import '../styles/Modal.css';

const Modal = ({ isOpen, onClose, children, overlayClassName = '', contentClassName = '', closeClassName = '' }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setShow(true), 10);
    } else {
      setShow(false);
    }
  }, [isOpen]);

  const handleClose = () => {
    setShow(false);
    setTimeout(() => onClose(), 300);
  };

  if (!isOpen && !show) return null;

  return (
    <div className={`modal-overlay ${show ? 'show' : ''} ${overlayClassName}`} onClick={handleClose}>
      <div className={`modal-content ${contentClassName}`} onClick={(e) => e.stopPropagation()}>
        <button className={`modal-close ${closeClassName}`} onClick={handleClose}>
          <i class="fa-solid fa-xmark"></i>
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
