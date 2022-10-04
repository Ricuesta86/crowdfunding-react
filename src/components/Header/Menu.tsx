import React, { useState } from 'react'
import './Menu.scss';
type prop={
    isShow:boolean;
}
const Menu = ({isShow}:prop) => {
    const [show, setShow] = useState<boolean>(isShow);
    return (
        <div>
            <ul className='header__navbar__menu-ul1'>
                <li className='header__navbar__menu-li'><a href="#">About</a></li>
                <li className='header__navbar__menu-li'><a href="#">Discover</a></li>
                <li className='header__navbar__menu-li'><a href="#">Get Started</a></li>
            </ul>
            <img src="./images/icon-close-menu.svg" alt="Close"
            onClick={()=>setShow(!show)}
            />            
        </div>
    )
}

export default Menu