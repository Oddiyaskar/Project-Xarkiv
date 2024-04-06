import './Obuna.scss'
import Vektor from '../../Img/1page/Vector.svg'

function Obuna() {
    return (
        <>
            <section className='obuna'>
                <div className="container">
                    <div className="obuna__info">
                        <h6 className='obuna__heading'>Подпишитесь на рассылку</h6>
                        <p className='obuna__text'>Узнавайте первыми о выгодных предложениях !</p>
                    </div>

                    <div className="obuna__info1">
                        <input className='obuna__input' type="text" placeholder='Введите e-mail' />
                        <button className='obuna__btn'>Подписаться</button>
                        <div className="obuna__div">
                            <img className='obuna__icon' src={Vektor} alt="Vektor" width="15" height="15" />
                            <span className='obuna__span'>Нажимая на кнопку, вы принимаете условия обработки персональных данных</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Obuna;