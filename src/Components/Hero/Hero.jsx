import './Hero.scss'
import { Link } from 'react-router-dom';

function Hero() {
    return (
        <>
            <section className='hero'>
                <div className="container">
                    <ul className='hero__list'>
                        <li className='hero__item'>
                            <Link className='hero__link' to="">Харьков мебель</Link>
                        </li>

                        <li className='hero__item'>
                            <Link className='hero__link' to="FourPage">Про нас</Link>
                        </li>

                        <li className='hero__item'>
                            <Link className='hero__link' to="SixPage">Мебель под заказ</Link>
                        </li>

                        <li className='hero__item'>
                            <Link className='hero__link' to="SevenPage">Шкафы купе</Link>
                        </li>

                        <li className='hero__item'>
                            <Link className='hero__link' to="FivePage">Доставка і оплата</Link>
                        </li>

                        <li className='hero__item'>
                            <Link className='hero__link' to="Kontakt">Контакты</Link>
                        </li>

                        <li className='hero__item'>
                            <Link className='hero__link' to="NinePage">Письмо директору</Link>
                        </li>


                        <li className='hero__item'>
                            <Link className='hero__link' to="TwoPage">Бренды</Link>
                        </li>


                        <li className='hero__item'>
                            <Link className='hero__link' to="ThreePage">Дизайн интерьера</Link>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Hero;