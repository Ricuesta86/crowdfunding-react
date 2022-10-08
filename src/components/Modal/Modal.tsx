import React from 'react';
import './modal.scss';

type props={
    children?:React.ReactNode;
    handleClose:()=>VoidFunction;
}
const Modal = ({children,handleClose}:props) => {
  return (
    <div className='modal'>
      <img onClick={()=>handleClose()} className='modal__close' src="./images/icon-close-modal.svg" alt="Close modal" />
      {children}
      </div>
  )
}

export default Modal