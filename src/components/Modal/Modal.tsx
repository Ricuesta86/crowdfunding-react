import React from 'react';
import './Modal.scss';

type props = {
  close?:boolean;
  children?: React.ReactNode;
  handleClose: () => VoidFunction;
}
const Modal = ({ close, children, handleClose }: props) => {
  return (
    <div className='modal' style={{display:'block'}}>
      <div className={!close? 'modal__container-width':'modal__container'}>
        {close && <img onClick={() => handleClose()} className='modal__container__close' src="./images/icon-close-modal.svg" alt="Close modal" />}
        {children}
      </div>
    </div>
  )
}

export default Modal