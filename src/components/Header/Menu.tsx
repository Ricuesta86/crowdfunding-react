import React, { useState } from 'react'
import './Menu.scss';
type prop={
    isShow:boolean;
}
const Menu = ({isShow}:prop) => {
    const [show, setShow] = useState<boolean>(isShow);
    return (
        <div>
         
        </div>
    )
}

export default Menu