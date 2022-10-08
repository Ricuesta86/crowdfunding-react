import React from 'react'
import './Backer.scss';

const Backer = () => {
    return (
        <>       
        <section className="backer">
            <div>
                <div>
                    <h2>$89,914</h2>
                    <p>of $100,000 backed</p>
                </div>
                <div className="line"></div>
                <div>
                    <h2>5,007</h2>
                    <p>total backers</p>
                </div>
                <div className="line"></div>
                <div>
                    <h2>56</h2>
                    <p>days left</p>
                </div>
            </div>
            <div className="barra-progreso"></div>
        </section>
        </>
    )
}

export default Backer