import './Kolleksiya.scss'
import Mask from '../../Img/1page/Mask.png'
import one from '../../Img/1page/1.png'
import two from '../../Img/1page/2.png'
import three from '../../Img/1page/3.png'
import Icon from '../../Img/1page/Icon.svg'

function Kolleksiya() {
    return (
        <>
            <section className='kolleksiya'>
                <div className="container">
                    <div className="kolleksiya__info">
                        <h5 className='kolleksiya__heading'>Коллекии</h5>
                        <img className='kolleksiya__img' src={Mask} alt="Mask" width={1877} height={750} />
                    </div>

                    <div className="kolleksiya__info1">
                        <h6 className='kolleksiya__headline'>Интересное про нас</h6>
                        <ul className='kolleksiya__list'>
                            <li className='kolleksiya__item'>
                                <a className='kolleksiya__link' href="#link">Блог</a>
                            </li>

                            <li className='kolleksiya__item'>
                                <a className='kolleksiya__link' href="#link">Instagram</a>
                            </li>

                            <li className='kolleksiya__item'>
                                <a className='kolleksiya__link' href="#link">Facebook</a>
                            </li>
                        </ul>

                        <ul className='kolleksiya__list1'>
                            <li className='kolleksiya__item1'>
                                <img className='kolleksiya__img1' src={one} alt="one" width={489} height={301} />
                                <h6 className='kolleksiya__title'>Как правильно выбрать диван</h6>
                                <p className='kolleksiya__text'>Диван — многофункциональная мебель, которую приобретают для гостиной и спальни, кухни и детской. Он может быть домашним и офисным.Его используют для сна, на него сажают гостей.</p>
                                <div className="kolleksiya__div">
                                    <h6 className='kolleksiya__title1'>Читать Больше</h6>
                                    <img className='kolleksiya__icon' src={Icon} alt="Icon" width="25" height="25" />
                                </div>
                            </li>

                            <li className='kolleksiya__item1'>
                                <img className='kolleksiya__img1' src={two} alt="two" width={489} height={301} />
                                <h6 className='kolleksiya__title'>Диван на балкон или лоджию</h6>
                                <p className='kolleksiya__text'>Обустроив на балконе уютный уголок для отдыха можно расширить жилое пространство квартиры. Перед этим желательно утеплить это помещение или хотя бы установить качественные стеклопакеты.</p>
                                <div className="kolleksiya__div">
                                    <h6 className='kolleksiya__title1'>Читать Больше</h6>
                                    <img className='kolleksiya__icon' src={Icon} alt="Icon" width="25" height="25" />
                                </div>
                            </li>

                            <li className='kolleksiya__item1'>
                                <img className='kolleksiya__img1' src={three} alt="three" width={489} height={301} />
                                <h6 className='kolleksiya__title'>Как правильно выбрать диван</h6>
                                <p className='kolleksiya__text'>Диван — многофункциональная мебель, которую приобретают для гостиной и спальни, кухни и детской. Он может быть домашним и офисным.Его используют для сна, на него сажают гостей.</p>
                                <div className="kolleksiya__div">
                                    <h6 className='kolleksiya__title1'>Читать Больше</h6>
                                    <img className='kolleksiya__icon' src={Icon} alt="Icon" width="25" height="25" />
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Kolleksiya;