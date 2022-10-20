import { useState } from 'react';
import api from '../../api';
import { useAppSelector } from '../../reducers/hook';
import BackThisProject from '../BackThisProject/BackThisProject';
import './GetStarted.scss';
import { product, amount } from '../../type';


const GetStarted = () => {
    const [products, setProducts] = useState<product[]|[]>(api.data.list);
    const amount:amount = useAppSelector(state => state.pledge);
    const [show, setShow] = useState<boolean>(false);
    const [pledge, setPledge] = useState<number | undefined>(undefined);
    const arrayAmount = Object.values(amount);

    const handleSelectReward = (pledgeSelect: number) => {
        setPledge(pledge => pledge = pledgeSelect)
        setShow(true)
    }

    const handleClose = () => {
        setShow(false);
    }

    return (
        <>
            <section className='getstarted'>
                {
                    products.map((product, index) => (
                        <div key={index} className={arrayAmount[index] === 0 ? 'getstarted__disable' : 'getstarted__enable'}>
                            <div className='getstarted__group'>
                                <h3 className='getstarted__title'>{product.title}</h3>
                                <p className='getstarted__subtitle'>Pledge ${product.pledge} or more</p>
                            </div>
                            <p className='text'>{product.text}
                            </p>

                            <div className='getstarted__group'>
                                <h4 className='getstarted__number'>
                                    {arrayAmount[index]} <span className="text"> left</span>
                                </h4>
                                {
                                    product.amount === 0 ? (<button className='btn getstarted__disable__btn' onClick={() => handleSelectReward(product.pledge)} disabled>Out of stock</button>) : (<button className='btn' onClick={() => handleSelectReward(product.pledge)}>Select Reward</button>)
                                }

                            </div>
                        </div>
                    ))
                }

            </section>
            {show ? <BackThisProject handleClose={handleClose} pledgeProp={pledge} /> : ''}
        </>
    )
}

export default GetStarted