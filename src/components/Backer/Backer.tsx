import { useAppSelector } from '../../reducers/hook';
import { NumericFormat } from 'react-number-format';
import './Backer.scss';
import ProgressBar from './ProgressBar';


const Backer = () => {
    const data = useAppSelector(state => state.mastercraft);
    return (
        <>
            <section className="backer">
                <div className='backer__group'>
                    <div className='backer__group__backed'>
                        <h2 className='backer__group__backed__title'>
                            <NumericFormat className='backer__group__backed__title' value={data.backed} displayType={'text'} thousandSeparator={true} prefix="$" /></h2>
                        <p className='backer__group__backed__text'>of <NumericFormat value={data.totalBacked} displayType={'text'} thousandSeparator={true} prefix="$" /> backed</p>
                    </div>
                    <div className="backer__group__line"></div>
                    <div className='backer__group__backed'>
                        <h2 className='backer__group__backed__title'>{data.totalBackers}</h2>
                        <p className='backer__group__backed__text'>total backers</p>
                    </div>
                    <div className="backer__group__line"></div>
                    <div className='backer__group__backed'>
                        <h2 className='backer__group__backed__title'>{data.dayLeft}</h2>
                        <p className='backer__group__backed__text'>days left</p>
                    </div>
                </div>
                <ProgressBar inicial={data.backed} total={data.totalBacked} />
            </section>
        </>
    )
}

export default Backer