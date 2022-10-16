import { useState } from 'react';
import { useAppSelector } from '../../reducers/hook';
import BackThisProject from '../BackThisProject/BackThisProject';
import './GetStarted';


const GetStarted = () => {
    const products = useAppSelector(state=>state.pledge);
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
                        <div key={index} className={product.pledge ===0?'disable':''}>
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
            { show ? <BackThisProject handleClose={handleClose} pledgeProp={pledge}/>:'' }
        </>
    )
}

export default GetStarted