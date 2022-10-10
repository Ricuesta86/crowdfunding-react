import React, { useState } from 'react'
import api from '../../api';
import { product } from '../../type';
import Modal from '../Modal/Modal'
import './BackThisProject.scss'

type props = {
    handleClose: any;
    pledgeProp: number | undefined;

}
const BackThisProject = ({ handleClose, pledgeProp }: props) => {    
    const [pledge, setPledge] = useState<number | undefined>(pledgeProp);
    const [products, setProducts] = useState<product[]>(api.data.list || []);

    const handleSubmit = (event:any)=>{
        event.preventDefault();
        console.log('object');
    }
    const handleSelect = (value:number)=>{
        setPledge(value);
    }
    return (
        <Modal handleClose={handleClose}>
            <div>
                <h3>Back this project {pledge}</h3>
                <p>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
                <section>
                    <div>
                        Pledge with no reward
                    </div>
                    <p>Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.
                    </p>
                </section>
            </div>

            {/* <!-- Selection modal start --> */}
            <section>
                {
                    products.map((product, index) => (
                        <div key={index} className=''>
                            <div onClick={()=>handleSelect(product.pledge)}>
                                <h3>{product.title}</h3>
                                <p>"Pledge ${product.pledge} or more"</p>
                            </div>
                            <p>{product.text}
                            </p>

                            <div>
                                <h4>
                                    {product.amount} <span className="h4--span"> left</span>
                                </h4>
                            </div>
                            <div className='line'></div>
                            <div style={product.pledge !== pledge ? { display: 'none' } : {}}>
                                <form onSubmit={(event)=>handleSubmit(event)}>
                                    <p>Enter your pledge</p>
                                    <input type="text" value={product.pledge} />
                                    <button>Continue</button>
                                </form>
                            </div>
                        </div>
                    ))
                }
            </section>
        </Modal>
    )
}

export default BackThisProject