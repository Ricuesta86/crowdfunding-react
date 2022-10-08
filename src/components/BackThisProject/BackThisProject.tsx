import React from 'react'
import Modal from '../Modal/Modal'
import './BackThisProject.scss'

type props={
    handleClose:any
}
const BackThisProject = ({handleClose}:props) => {
    return (
        <Modal handleClose={handleClose}>
            <div>                
                <h3>Back this project</h3>
                <p>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
                <section>
                    <div>
                        Pledge with no reward
                    </div>
                    <p>Choose to support us without a reward if you simply believe in our project. As a backer,
                        you will be signed up to receive product updates via email.
                    </p>
                </section>
            </div>

            {/* <!-- Selection modal start --> */}

            <section>
                <div>
                    <h3>Bamboo Stand <span>Pledge $25 or more</span></h3>
                </div>
                <p>You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and
                    youâ€™ll be added to a special Backer member list.</p>
                <h4>101 <span className='h4--span'>left</span></h4>

                <div className='line'></div>
                <div>
                    <p>Enter your pledge</p>
                    <input type="text" value={25}/>
                    <button>Continue</button>
                </div>
            </section>

            <section>
                <div>
                    <h3>Black Edition Stand <span>Pledge $75 or more</span></h3>
                </div>
                <p>You get a Black Special Edition computer stand and a personal thank you. Youâ€™ll be added to our Backer
            member list. Shipping is included.</p>
                <h4>64 <span className='h4--span'>left</span></h4>

                <div className='line'></div>
                <div>
                    <p>Enter your pledge</p>
                    <input type="text" value={75}/>
                    <button>Continue</button>
                </div>
            </section>

            <section>
                <div>
                    <h3>Mahogany Special Edition <span>Pledge $200 or more</span></h3>
                </div>
                <p>You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. Youâ€™ll be added
            to our Backer member list. Shipping is included.</p>
                <h4>0 <span className='h4--span'>left</span></h4>

                <div className='line'></div>
                <div>
                    <p>Enter your pledge</p>
                    <input type="text" value={200}/>
                    <button>Continue</button>
                </div>
            </section>
        </Modal>
    )
}

export default BackThisProject