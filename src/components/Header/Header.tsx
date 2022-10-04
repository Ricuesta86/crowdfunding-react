import React, { useState } from 'react'
import './Header.scss'
import Menu from './Menu';
const Header = () => {
  const [show, setShow] = useState<boolean>(false);


  const handleTogget = ()=>{

  }

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
          <img 
          className={!show?'header__navbar__menu-hamburger ': ' header__navbar__menu-hamburger hide'}src="./images/icon-hamburger.svg" alt="hamburger" 
          onClick={()=>setShow(!show)}
          />
          {
           show?<Menu isShow={show}/>:null
          }
        </div>
      </nav>
    </header>
  )
}

export default Header