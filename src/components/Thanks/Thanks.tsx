import React from 'react'
import "./Thanks.scss"

type Props = {
  handleClose: () => VoidFunction;
}
const Thanks = ({ handleClose }: Props) => {
  return (
    <div className='thanks' style={{paddingLeft:'0px'}}>
      <img className='thanks__img' src="./images/icon-check.svg" alt="Check" />
      <h1 className='thanks__title' >Thanks for your support!</h1>
      <p className='thanks__text text'>Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get
        an email once our campaign is completed.</p>
      <button className='thanks__btn btn' onClick={handleClose}>Got it!</button>
    </div>
  )
}

export default Thanks