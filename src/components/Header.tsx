import React from 'react'
import './Header.scss'
const Header = () => {
  return (
    <header className='header' >
      <nav className='header__navbar'>
        <div className='header__navbar__logo'><a href="#"><img className='header__navbar__logo-img' src="./images/logo.svg" alt="" /></a></div>
        <div className='header__navbar__menu'>
          <ul className='header__navbar__menu-ul'>
            <li className='header__navbar__menu-li'><a href="#">About</a></li>
            <li className='header__navbar__menu-li'><a href="#">Discover</a></li>
            <li className='header__navbar__menu-li'><a href="#">Get Started</a></li>
          </ul>
          <img className='header__navbar__menu-hamburger'src="./images/icon-hamburger.svg" alt="hamburger" />
        </div>
      </nav>
    </header>
  )
}

export default Header