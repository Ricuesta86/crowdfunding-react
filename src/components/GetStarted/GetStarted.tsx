import React, { useState } from 'react';
import { dataType, product } from '../../type';
import BackThisProject from '../BackThisProject/BackThisProject';
import './GetStarted';
type props = {
    products: product[];
}

const GetStarted = ({ products }: props) => {
    const [show, setShow] = useState<boolean>(false);
    const [pledge, setPledge] = useState<number | undefined>(undefined);

    const handleSelectReward=(pledgeSelect:number)=>{
        setPledge(pledge=>pledge=pledgeSelect)
        setShow(true)
    }

    const handleClose=()=>{
        setShow(false);
      }

    return (
        <>
            <section className='getStarted'>
                {
                    products.map((product, index) => (
                        <div key={index} className=''>
                            <div>
                                <h3>{product.title}</h3>
                                <p>"Pledge ${product.pledge} or more"</p>
                            </div>
                            <p>{product.text}
                            </p>

                            <div>
                                <h4>
                                    {product.amount} <span className="h4--span"> left</span>
                                </h4>
                                <button onClick={()=>handleSelectReward(product.pledge)}>Select Reward</button>
                            </div>
                        </div>
                    ))
                }

            </section>
            { show ? <BackThisProject handleClose={handleClose} pledge={pledge}/>:'' }
        </>
    )
}

export default GetStarted