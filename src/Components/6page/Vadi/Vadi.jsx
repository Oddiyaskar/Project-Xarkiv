import './Vadi.scss'
import Icon from '../../Img/Vadi/ico.svg'
import Zakaz from '../../Img/Vadi/Zakaz.svg'
import Like from '../../Img/Vadi/Like.svg'
import Koz from '../../Img/Vadi/Koz.svg'
import Qongiroq from '../../Img/Vadi/qongiroq.svg'
import Prize from '../../Img/Vadi/Prize.svg'
import Daftar from '../../Img/Vadi/daftar.svg'
import Map from '../../Img/Vadi/Map.svg'

function Vadi() {
    return (
        <>
            <section className='vadi'>
                <div className="container">
                    <div className="vadi__info">
                        <div className="vadi__info1">
                            <img className='vadi__img' src={Icon} alt="Icon" width="40" height="40" />

                            <div className="vadi__div">
                                <h1 className='vadi__heading'>Erik Vadi</h1>
                                <a className='vadi__link' href="#link">email@gmail.com</a>
                            </div>
                        </div>

                        <hr className='vadi__line' />

                        <div className="vadi__info2">
                            <img className='vadi__icon' src={Zakaz} alt="Zakaz" width="40" height="40" />
                            <h2 className='vadi__title'>Мои заказы</h2>
                        </div>

                        <hr className='vadi__line' />

                        <div className="vadi__info2">
                            <img className='vadi__icon' src={Like} alt="Like" width="40" height="40" />
                            <h2 className='vadi__title'>Список желаний</h2>
                        </div>

                        <hr className='vadi__line' />

                        <div className="vadi__info2">
                            <img className='vadi__icon' src={Koz} alt="Koz" width="40" height="40" />
                            <h2 className='vadi__title'>Просмотренные товары</h2>
                        </div>

                        <hr className='vadi__line' />

                        <div className="vadi__info2">
                            <img className='vadi__icon' src={Qongiroq} alt="Qongiroq" width="40" height="40" />
                            <h2 className='vadi__title'>Рассылки</h2>
                        </div>

                        <hr className='vadi__line' />

                        <div className="vadi__info2">
                            <img className='vadi__icon' src={Prize} alt="Prize" width="40" height="40" />
                            <h2 className='vadi__title'>Мой бонусный счет</h2>
                        </div>

                        <hr className='vadi__line' />

                        <div className="vadi__info2">
                            <img className='vadi__icon' src={Daftar} alt="Daftar" width="40" height="40" />
                            <h2 className='vadi__title'>Оплата</h2>
                        </div>

                        <hr className='vadi__line' />

                        <div className="vadi__info2">
                            <img className='vadi__icon' src={Map} alt="Map" width="40" height="40" />
                            <h2 className='vadi__title'>Доставка</h2>
                        </div>

                        <hr className='vadi__line' />
                    </div>

                    <hr className='vadi__line1' />
                </div>
            </section>
        </>
    )
}

export default Vadi;