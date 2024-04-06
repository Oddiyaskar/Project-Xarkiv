import "./Bosh.scss"
import Vector from '../../Img/2page/Vector.svg'

function Bosh() {
    return (
        <>
            <section className="bosh">
                <div className="container">
                    <ul className="bosh__list">
                        <li className="bosh__item">
                            <a className="bosh__link" href="#link">Главная</a>
                        </li>

                        <li className="bosh__item">
                            <img className="bosh__icon" src={Vector} alt="Vector" width="14" height="10" />
                        </li>

                        <li className="bosh__item">
                            <a className="bosh__link" href="#link">Мебель для спальни</a>
                        </li>

                        <li className="bosh__item">
                            <img className="bosh__icon" src={Vector} alt="Vector" width="14" height="10" />
                        </li>

                        <li className="bosh__item">
                            <a className="bosh__link" href="#link">Кровати</a>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Bosh;