import React from 'react'
type props={
    children?:React.ReactNode;
}
const Modal = ({children}:props) => {
  return (
    <div className='modal'>{children}</div>
  )
}

export default Modal