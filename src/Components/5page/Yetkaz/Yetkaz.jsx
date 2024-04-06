import './Yetkaz.scss'
import Vector from '../../Img/Yetkaz/Vector.svg'
import Img from '../../Img/Yetkaz/Img.png'

function Yetkaz() {
    return (
        <>
            <section className='yetkaz'>
                <div className="container">
                    <ul className='yetkaz__list'>
                        <li className='yetkaz__item'>
                            <a className='yetkaz__link' href="#link">Главная</a>
                        </li>

                        <li className='yetkaz__item'>
                            <img className='yetkaz__icon' src={Vector} alt="Vector" width="14" height="10" />
                        </li>

                        <li className='yetkaz__item'>
                            <a className='yetkaz__link' href="#link">Оплата и доставка</a>
                        </li>
                    </ul>

                    <h1 className='yetkaz__heading'>Оплата и доставка</h1>

                    <div className="yetkaz__info">
                        <img className='yetkaz__img' src={Img} alt="Img" width={865} height={505} />

                        <div className="yetkaz__div">
                            <div className="yetkaz__info1">
                                <h2 className='yetkaz__heading1'>Удобно, выгодно и безопасно</h2>
                                <p className='yetkaz__text'>МЕГА ДОМ - самый большой интернет-магазин мебели в Украине. Здесь можно найти любую мебель, которая поможет вам воплотить самые смелые мечты и пожелания в интерьере, создать настоящий уют.</p>
                                <p className='yetkaz__text'>Мы предлагаем продукцию по приятной цене и предоставляем выгодные условия доставки и сборки. Оформляйте заказ на сумму от 10 000 грн. и гарантировано получайте бесплатную доставку и сборку в Харькове, Полтаве, Днепре, Одессе и Львове.</p>
                                <p className='yetkaz__text'>На всю продукцию предоставляется гарантия от 12 до 18 месяцев</p>
                            </div>

                            <div className="yetkaz__info2">
                                <h2 className='yetkaz__heading1'>Наша цель — счастливые клиенты</h2>
                                <p className='yetkaz__text'>Мы знаем, что мебель способна сделать жизнь комфортнее, приятнее и ярче. Поэтому и поиск необходимой мебели должен быть легким, быстрым и удобным. Мы помогаем найти то, что нужно именно Вам, в одном месте. Все заботы мы берем на себя, исполняем ваши желания и гарантируем сервис, который делает вашу жизнь счастливее.</p>
                            </div>

                            <div className="yetkaz__info4">
                                <h2 className='yetkaz__heading1'>Осуществлять мечты легко</h2>
                                <p className='yetkaz__text'>Мы работаем по всей Украине, сотрудничаем с ведущими производителями мебели, чтобы вы могли легко подобрать любую мебель. Мы хотим, чтобы наши клиенты получали лучший сервис, поэтому реализуем комплексный подход: доставка, сборка, гарантийное обслуживание.</p>
                            </div>

                            <div className="yetkaz__info5">
                                <h2 className='yetkaz__heading1'>Удобная доставка</h2>
                                <p className='yetkaz__text'>Любой товар можно заказать с доставкой. Все комплексные заказы на сумму от 10 000 грн. мы доставляем и собираем бесплатно и оперативно.
                                    При наличии мебели на складе, доставка и сборка по Харькову - в течение суток, по Украине - в течение 3 рабочих дней. Всё — с минимальной предоплатой, если необходимо — в рассрочку или кредит. Возможна, как безналичная, так и наличная оплата - выбор за вами..</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Yetkaz;