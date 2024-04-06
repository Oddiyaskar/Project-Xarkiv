import './Narx.scss'
import Toggler from '../../Img/2page/Narx/toggler.svg'
import Vector from '../../Img/2page/Narx/Vector.svg'
import Slider from '../../Img/2page/Narx/slider.svg'
import Notoggler from '../../Img/2page/Narx/notoggler.svg'

function Narx() {
    return (
        <>
            <section className='narx'>
                <div className="container">
                    <div className="narx__div">
                        <img className='narx__icon' src={Toggler} alt="Toggler" width="30" height="16" />
                        <span className='narx__span'>Показывать только товары в наличии</span>
                    </div>

                    <hr className='narx__line' />

                    <div className="narx__div">
                        <img className='narx__icon1' src={Vector} alt="Vector" width="12" height="8" />
                        <p className='narx__text'>Цена</p>
                    </div>

                    <div className="narx__div">
                        <button className='narx__btn'>489</button>
                        <button className='narx__btn1'>36 954</button>
                    </div>

                    <img className='narx__img' src={Slider} alt="Slider" width="327" height="24" />

                    <hr className='narx__line' />

                    <div className="narx__div">
                        <img className='narx__icon' src={Toggler} alt="Toggler" width="30" height="16" />
                        <span className='narx__span'>Товар участвует в акции</span>
                    </div>

                    <hr className='narx__line' />

                    <div className="narx__div">
                        <img className='narx__icon' src={Notoggler} alt="Notoggler" width="30" height="16" />
                        <span className='narx__span'>На товар действует скидка</span>
                    </div>

                    <hr className='narx__line' />

                    <div className="narx__div1">
                        <img className='narx__icon1' src={Vector} alt="Vector" width="12" height="8" />
                        <p className='narx__text'>Высота</p>
                    </div>

                    <div className="narx__div1">
                        <p className='narx__text1'>от</p>
                        <button className='narx__btn2'>489</button>
                        <p className='narx__text2'>до</p>
                        <button className='narx__btn3'>895</button>
                    </div>

                    <hr className='narx__line' />

                    <div className="narx__div1">
                        <img className='narx__icon1' src={Vector} alt="Vector" width="12" height="8" />
                        <p className='narx__text'>Ширина</p>
                    </div>

                    <div className="narx__div1">
                        <p className='narx__text1'>от</p>
                        <button className='narx__btn2'>489</button>
                        <p className='narx__text2'>до</p>
                        <button className='narx__btn3'>895</button>
                    </div>

                    <hr className='narx__line' />

                    <div className="narx__div1">
                        <img className='narx__icon1' src={Vector} alt="Vector" width="12" height="8" />
                        <p className='narx__text'>Длина</p>
                    </div>

                    <div className="narx__div1">
                        <p className='narx__text1'>от</p>
                        <button className='narx__btn2'>489</button>
                        <p className='narx__text2'>до</p>
                        <button className='narx__btn3'>895</button>
                    </div>

                    <hr className='narx__line' />

                    <div className="narx__div1">
                        <img className='narx__icon1' src={Vector} alt="Vector" width="12" height="8" />
                        <p className='narx__text'>Основание Под Матрас</p>
                    </div>

                    <div className="narx__div1">
                        <p className='narx__text1'>от</p>
                        <button className='narx__btn2'>489</button>
                        <p className='narx__text2'>до</p>
                        <button className='narx__btn3'>895</button>
                    </div>

                    <hr className='narx__line' />

                    <div className="narx__div1">
                        <img className='narx__icon1' src={Vector} alt="Vector" width="12" height="8" />
                        <p className='narx__text'>Материал Корпуса</p>
                    </div>

                    <div className="narx__div2">
                        <button className='narx__btn4'>Hermes</button> <br />
                        <button className='narx__btn4'>3M</button> <br />
                        <button className='narx__btn4'>Norton</button> <br />
                        <button className='narx__btn4'>Awuka</button> <br />
                        <button className='narx__btn4'>Okuma</button> <br />
                        <p className='narx__text3'>Смотреть Все</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Narx;