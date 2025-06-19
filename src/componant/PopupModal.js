import React, { useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const PopupModal = ({ isOpen, onClose, title, children }) => {
  useEffect(() => {
    if (isOpen) {
      const modal = new window.bootstrap.Modal(document.getElementById('reusableModal'));
      modal.show();
    }
  }, [isOpen]);

  return (
    <div
      className="modal fade"
      id="reusableModal"
      tabIndex="-1"
      aria-labelledby="reusableModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="reusableModalLabel">{title}</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default PopupModal;
