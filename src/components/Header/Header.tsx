import React, { useState } from "react";
import "./Header.scss";
import Menu from "./Menu";
const Header = () => {
  const [show, setShow] = useState<boolean>(true);

  const handleTogget = () => {};

  return (
    <header className="header">
      <nav className={show ? "header__navbar" : "header__navbar close"}>
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
            src={
              show
                ? "./images/icon-hamburger.svg"
                : "./images/icon-close-menu.svg"
            }
            alt="Icon Menu"
            onClick={() => setShow(!show)}
          />
          {!show ? (
            <div className="header__navbar__menu__modal">
              <div className="header__navbar__menu__modal--modal">
                <ul className="header__navbar__menu__modal--ul">
                  <li className="-header__navbar__menu__modal-li">
                    <a href="#">About</a>
                  </li>
                  <li className="header__navbar__menu__modal--li">
                    <a href="#">Discover</a>
                  </li>
                  <li className="header__navbar__menu__modal--li">
                    <a href="#">Get Started</a>
                  </li>
                </ul>
              </div>
            </div>
          ) : null}
        </div>
      </nav>
    </header>
  );
};

export default Header;
