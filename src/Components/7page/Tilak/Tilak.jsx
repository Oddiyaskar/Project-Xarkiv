import './Tilak.scss'
import Img from '../../Img/Tilak/Img.png'

function Tilak() {
    return (
        <>
            <section className='tilak'>
                <div className="container">
                    <h1 className='tilak__heading'>Список желаний</h1>
                    <img className='tilak__img' src={Img} alt="Img" width={290} height={290} />
                    <h2 className='tilak__title'>Диван "Ergonomic Rubber</h2>
                    <div className="tilak__info">
                        <h3 className='tilak__headline'>35 990 ₽</h3>
                        <del className='tilak__text'>75 430 ₽</del>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Tilak;