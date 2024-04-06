import './Kontakt.scss'
import Vektor from '../Img/Kontakt/Vector.svg'
import Group from '../Img/Kontakt/Group.svg'
import Slider from '../Img/Kontakt/slider.png'

function Kontakt() {
    return (
        <>
            <section className='kontakt'>
                <div className="container">
                    <ul className='kontakt__list'>
                        <li className='kontakt__item'>
                            <a className='kontakt__link' href="#link">Главная</a>
                        </li>

                        <li className='kontakt__item'>
                            <img className='kontakt__icon' src={Vektor} alt="Vektor" width="14" height="10" />
                        </li>

                        <li className='kontakt__item'>
                            <a className='kontakt__link' href="#link">Контакты</a>
                        </li>
                    </ul>

                    <div className="kontakt__info">
                        <h1 className='kontakt__heading'>Контакты</h1>
                        <p className='kontakt__text'>При создании генератора мы использовали небезизвестный универсальный код речей. Текст генерируется абзацами случайным образом от двух до десяти предложений в абзаце.</p>
                    </div>

                    <div className="kontakt__info1">
                        <div className="kontakt__div">
                            <div className="kontakt__div1">
                                <h2 className='kontakt__title'>Контакты</h2>
                                <ul className='kontakt__list1'>
                                    <li className='kontakt__item1'>
                                        <a className='kontakt__link1' href="#link">+38 050-2000-573</a>
                                    </li>

                                    <li className='kontakt__item1'>
                                        <a className='kontakt__link1' href="#link">+38 093-2000-573</a>
                                    </li>

                                    <li className='kontakt__item1'>
                                        <a className='kontakt__link1' href="#link">+38 096-2000-573</a>
                                    </li>

                                    <li className='kontakt__item1'>
                                        <a className='kontakt__link1' href="#link">kharkivmebelinfo@gmail.com</a>
                                    </li>
                                </ul>

                                <h3 className='kontakt__headline'>График работы</h3>

                                <ul className='kontakt__list2'>
                                    <li className='kontakt__item2'>
                                        <a className='kontakt__link2' href="#link">Понедельник-пятница: 09:00 - 18:00</a>
                                    </li>

                                    <li className='kontakt__item2'>
                                        <a className='kontakt__link2' href="#link">Суббота: 10:00 - 16:00</a>
                                    </li>
                                </ul>

                                <p className='kontakt__text1'>Харьков, торговый центр на Гагарина 20А</p>

                                <h4 className='kontakt__headline1'>Соц. Сети</h4>
                                <img className='kontakt__icon1' src={Group} alt="Group" width="74" height="29" />
                            </div>
                        </div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10262.37737104146!2d36.228209929951966!3d49.98146561368771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4127a0faa6c162a1%3A0xb05725a20065b857!2z0KXQsNGA0YzQutC-0LLRgdC60LjQuSDQs9C-0YHRg9C00LDRgNGB0YLQstC10L3QvdGL0Lkg0YbQuNGA0Lo!5e0!3m2!1sru!2s!4v1712153233889!5m2!1sru!2s" width="1053" height="502" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <img className='kontakt__img' src={Slider} alt="Slider" width={1896} height={645} />
                </div>
            </section>
        </>
    )
}

export default Kontakt;