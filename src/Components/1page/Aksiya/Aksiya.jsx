import "./Aksiya.scss"
import Green from '../../Img/1page/green.png'
import Black from '../../Img/1page/black.png'

function Aksiya() {
    return (
        <>
            <section className="aksiya">
                <div className="container">
                    <h3 className="aksiya__headline">Новости и акции</h3>
                    <div className="aksiya__info">
                        <div className="aksiya__info1">
                            <div className="aksiya__div">
                                <p className="aksiya__text">Коллекция</p>
                                <h4 className="aksiya__heading">Новый Стул Denim Green</h4>
                                <button className="aksiya__btn">Показать Все</button>
                            </div>
                            <img className="aksiya__img" src={Green} alt="Green" />
                        </div>

                        <div className="aksiya__info1">
                            <div className="aksiya__div">
                                <p className="aksiya__text">Коллекция</p>
                                <h4 className="aksiya__title">Кухонный стол Eames DT-03</h4>
                                <button className="aksiya__btn">Показать Все</button>
                            </div>
                            <img className="aksiya__img1" src={Black} alt="Black" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Aksiya;