import React from 'react';
import './Modal.scss';

type props = {
  children?: React.ReactNode;
  handleClose: () => VoidFunction;
}
const Modal = ({ children, handleClose }: props) => {
  return (
    <div className='modal' style={{display:'block'}}>
      <div className="modal__container">
        <img onClick={() => handleClose()} className='modal__container__close' src="./images/icon-close-modal.svg" alt="Close modal" />
        {children}
      </div>
    </div>
  )
}

export default Modal