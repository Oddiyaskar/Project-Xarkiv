import "./To'lov.scss"
import Ellipse from '../../Img/Tulov/Ellipse.svg'
import Aylana from '../../Img/Tulov/aylana.svg'

function Tulov() {
    return (
        <>
            <section className="tulov">
                <div className="container">
                    <h1 className="tulov__heading">Оплата</h1>
                    <div className="tulov__info">
                        <div className="tulov__div">
                            <h2 className="tulov__title">Выберите способ оплаты</h2>
                            <ul className="tulov__list">
                                <li className="tulov__item">
                                    <img className="tulov__icon" src={Ellipse} alt="Ellipse" width="13" height="13" />
                                    <a className="tulov__link" href="#link">Наличны</a>
                                </li>

                                <li className="tulov__item">
                                    <img className="tulov__icon" src={Aylana} alt="Aylana" width="13" height="13" />
                                    <a className="tulov__link" href="#link">Картой</a>
                                </li>

                                <li className="tulov__item">
                                    <img className="tulov__icon" src={Ellipse} alt="Ellipse" width="13" height="13" />
                                    <a className="tulov__link" href="#link">По счету</a>
                                </li>
                            </ul>

                            <button className="tulov__btn">Сохранить</button>
                        </div>

                        <div className="tulov__div1">
                            <h3 className="tulov__headline">Добавить карту</h3>

                            <div className="tulov__div2">
                                <p className="tulov__text">Номер карты</p>
                                <input className="tulov__input" type="text" placeholder="Stefan Cel Mare 15/7" />
                            </div>

                            <div className="tulov__div3">
                                <p className="tulov__text">Держатель карты</p>

                                <p className="tulov__text1">Срок действия</p>

                                <p className="tulov__text2">CVV2</p>
                            </div>

                            <div className="tulov__div4">
                                <input className="tulov__input1" type="text" placeholder="Ion Ceban" />
                                <input className="tulov__input2" type="text" placeholder="xx  /  xx" />
                                <input className="tulov__input3" type="password" placeholder="****" />
                            </div>
                            <button className="tulov__btn1">Добавить</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Tulov;