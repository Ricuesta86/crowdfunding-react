import React from 'react'
import './ProgressBar.scss';

type props = {
    inicial: number;
    total: number;
}

const ProgressBar = ({ inicial, total }: props) => {
    let progress = (inicial * 100 / total) > 100 ? 100 : inicial * 100 / total;
    return (
        <>
            <div className="barra-progreso">
                <div className="bar">
                    <div className="bar__progress" style={{ width: progress + '%' }}></div>
                </div>
            </div>
        </>
    )
}




export default ProgressBar