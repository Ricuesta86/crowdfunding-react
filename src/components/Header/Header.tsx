import React, { useState } from "react";
import Modal from "../Modal/Modal";
import "./Header.scss";

const Header = () => {
  const [show, setShow] = useState<boolean>(true);

  const handleClose = () => {
    setShow(!show);
  }

  return (
    <header className="header">
      {show ? <nav className="header__navbar">
        <div className="header__navbar__logo">
          <a href="#">
            <img
              className="header__navbar__logo-img"
              src="./images/logo.svg"
              alt=""
            />
          </a>
        </div>
        <div className="header__navbar__menu">
          <ul className="header__navbar__menu-ul">
            <li className="header__navbar__menu-li">
              <a href="#">About</a>
            </li>
            <li className="header__navbar__menu-li">
              <a href="#">Discover</a>
            </li>
            <li className="header__navbar__menu-li">
              <a href="#">Get Started</a>
            </li>
          </ul>
          <img
            className="header__navbar__menu-hamburger"
            src={"./images/icon-hamburger.svg"}
            alt="Icon Menu"
            onClick={() => setShow(!show)}
          />
        </div>
      </nav>
        : (
          <Modal handleClose={handleClose} menu >
            <div className="header__menu__modal">
              <div className="header__menu__modal--modal">
                <ul className="header__menu__modal--ul">
                  <li className="header__menu__modal--li">
                    <a href="#">About</a>
                  </li>
                  <li className="header__menu__modal--li">
                    <a href="#">Discover</a>
                  </li>
                  <li className="header__menu__modal--li">
                    <a href="#">Get Started</a>
                  </li>
                </ul>
              </div>
            </div>
          </Modal>
        )}
    </header>
  );
};

export default Header;
