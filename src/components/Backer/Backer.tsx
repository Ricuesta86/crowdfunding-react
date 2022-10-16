import { useAppSelector } from '../../reducers/hook';
import { dataType } from '../../type';
import './Backer.scss';
import ProgressBar from './ProgressBar';


const Backer = () => {
    const data = useAppSelector(state=>state.mastercraft);
    return (
        <>
            <section className="backer">
                <div>
                    <div>
                        <h2>${data.backed}</h2>
                        <p>of ${data.totalBacked} backed</p>
                        <div className="line"></div>
                    </div>
                    <div>
                        <h2>{data.totalBackers}</h2>
                        <p>total backers</p>
                        <div className="line"></div>
                    </div>
                    <div>
                        <h2>{data.dayLeft}</h2>
                        <p>days left</p>
                    </div>
                </div>
                <ProgressBar inicial={data.backed} total={data.totalBacked} />
            </section>
        </>
    )
}

export default Backer