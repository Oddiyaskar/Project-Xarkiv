import "./Ko'rilgan.scss"
import Img from '../../Img/Tilak/Img.png'

function Korilgan() {
    return (
        <>
            <section className="korilgan">
                <div className="container">
                <h1 className='korilgan__heading'>Просмотренные товары</h1>
                    <img className='korilgan__img' src={Img} alt="Img" width={290} height={290} />
                    <h2 className='korilgan__title'>Диван "Ergonomic Rubber</h2>
                    <div className="korilgan__info">
                        <h3 className='korilgan__headline'>35 990 ₽</h3>
                        <del className='korilgan__text'>75 430 ₽</del>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Korilgan;