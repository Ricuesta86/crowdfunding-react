import React from 'react';
import './Modal.scss';

type props = {
  menu?: boolean;
  close?: boolean;
  children?: React.ReactNode;
  handleClose: () => void;
}
const Modal = ({ menu, close, children, handleClose }: props) => {
  return (
    <div className='modal' style={{ display: 'block', paddingLeft: '0px' }}>
      {menu &&
        <>
          <nav className="modal__navbar">
            <div className="modal__navbar__logo">
              <a href="#">
                <img
                  className="modal__navbar__logo-img"
                  src="./images/logo.svg"
                  alt=""
                />
              </a>
            </div>
            <div className="modal__navbar__menu">
              <img
                className="modal__navbar__menu-close"
                src={"./images/icon-close-menu.svg"}
                alt="Icon Menu"
                onClick={() => handleClose()}
              />
            </div>
          </nav>
        </>
      }
      <div className={
        menu ? 'modal__container-menu':
        !close ? 'modal__container-width' : 'modal__container'}>
        {close && <img onClick={() => handleClose()} className='modal__container__close' src="./images/icon-close-modal.svg" alt="Close modal" />}
        {children}
      </div>
    </div>
  )
}

export default Modal