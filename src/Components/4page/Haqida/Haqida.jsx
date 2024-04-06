import './Haqida.scss'
import Vector from '../../Img/haqida/Vector.svg'
import Mask from '../../Img/haqida/Mask.png'

function Haqida() {
    return (
        <>
            <section className='haqida'>
                <div className="container">
                    <ul className='haqida__list'>
                        <li className='haqida__item'>
                            <a className='haqida__link' href="#link">Главная</a>
                        </li>

                        <li className='haqida__item'>
                            <img className='haqida__icon' src={Vector} alt="Vector" width="14" height="10" />
                        </li>

                        <li className='haqida__item'>
                            <a className='haqida__link' href="#link">О нас</a>
                        </li>
                    </ul>

                    <h1 className='haqida__heading'>О нас</h1>

                    <img className='haqida__img' src={Mask} alt="Mask" width={989} height={410} />

                    <div className="haqida__info">
                        <h2 className='haqida__heading1'>Удобно, выгодно и безопасно</h2>
                        <p className='haqida__text'>МЕГА ДОМ - самый большой интернет-магазин мебели в Украине. Здесь можно найти любую мебель, которая поможет вам воплотить самые смелые мечты и пожелания в интерьере, создать настоящий уют.</p>
                        <p className='haqida__text'>Мы предлагаем продукцию по приятной цене и предоставляем выгодные условия доставки и сборки. Оформляйте заказ на сумму от 10 000 грн. и гарантировано получайте бесплатную доставку и сборку в Харькове, Полтаве, Днепре, Одессе и Львове.</p>
                        <p className='haqida__text'>На всю продукцию предоставляется гарантия от 12 до 18 месяцев</p>
                    </div>

                    <div className="haqida__info1">
                        <h2 className='haqida__heading1'>Наша цель — счастливые клиенты</h2>
                        <p className='haqida__text'>Мы знаем, что мебель способна сделать жизнь комфортнее, приятнее и ярче. Поэтому и поиск необходимой мебели должен быть легким, быстрым и удобным. Мы помогаем найти то, что нужно именно Вам, в одном месте. Все заботы мы берем на себя, исполняем ваши желания и гарантируем сервис, который делает вашу жизнь счастливее.</p>
                    </div>

                    <div className="haqida__info2">
                        <h2 className='haqida__heading1'>Осуществлять мечты легко</h2>
                        <p className='haqida__text'>Мы работаем по всей Украине, сотрудничаем с ведущими производителями мебели, чтобы вы могли легко подобрать любую мебель. Мы хотим, чтобы наши клиенты получали лучший сервис, поэтому реализуем комплексный подход: доставка, сборка, гарантийное обслуживание.</p>
                    </div>

                    <div className="haqida__info3">
                        <h2 className='haqida__heading1'>Удобная доставка</h2>
                        <p className='haqida__text'>Любой товар можно заказать с доставкой. Все комплексные заказы на сумму от 10 000 грн. мы доставляем и собираем бесплатно и оперативно.
                        При наличии мебели на складе, доставка и сборка по Харькову - в течение суток, по Украине - в течение 3 рабочих дней. Всё — с минимальной предоплатой, если необходимо — в рассрочку или кредит. Возможна, как безналичная, так и наличная оплата - выбор за вами..</p>
                    </div>

                    <div className="haqida__info3">
                        <h2 className='haqida__heading1'>Дальше — больше</h2>
                        <p className='haqida__text'>Наша цель, чтобы у наших клиентов никогда не возникал вопрос «где купить мебель?». МЕГА ДОМ - самый большой интернет-магазин мебели, в котором каждый найдет свой вариант мебели. Мы хотим помочь как можно большему количеству людей стать счастливыми обладателями комфортной мебели.</p>
                        <p className='haqida__text'>Ждем вас!</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Haqida;