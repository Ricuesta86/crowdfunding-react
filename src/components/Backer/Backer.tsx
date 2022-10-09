import React from 'react'
import { dataType } from '../../type';
import './Backer.scss';
import ProgressBar from './ProgressBar';

type props = {
    dataInfo: dataType;
}

const Backer = ({ dataInfo }: props) => {
    return (
        <>
            <section className="backer">
                <div>
                    <div>
                        <h2>${dataInfo.backed}</h2>
                        <p>of ${dataInfo.totalBacked} backed</p>
                        <div className="line"></div>
                    </div>
                    <div>
                        <h2>{dataInfo.totalBackers}</h2>
                        <p>total backers</p>
                        <div className="line"></div>
                    </div>
                    <div>
                        <h2>{dataInfo.dayLeft}</h2>
                        <p>days left</p>
                    </div>
                </div>
                <ProgressBar inicial={dataInfo.backed} total={dataInfo.totalBacked} />
            </section>
        </>
    )
}

export default Backer