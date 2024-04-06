import './Mahsulot.scss'
import One from '../../Img/3page/Mahsulot/1.png'
import Two from '../../Img/3page/Mahsulot/2.png'
import Three from '../../Img/3page/Mahsulot/3.png'
import Four from '../../Img/3page/Mahsulot/4.png'
import Icon from '../../Img/3page/Mahsulot/Icon.svg'

const Mahsulotlar = [
    {
        id: 0,
        img: One,
        title: 'Диван "Ergonomic Rubber Shoes”',
        headline: '35 990 ₽',
        text: '75 430 ₽',
    },
    {
        id: 1,
        img: Two,
        title: 'Диван "Ergonomic Rubber Shoes”',
        headline: '35 990 ₽',
        text: '75 430 ₽',
    },
    {
        id: 2,
        img: Three,
        title: 'Диван "Ergonomic Rubber Shoes”',
        headline: '35 990 ₽',
        text: '75 430 ₽',
    },
    {
        id: 3,
        img: Four,
        title: 'Диван "Ergonomic Rubber Shoes”',
        headline: '35 990 ₽',
        text: '75 430 ₽',
    },
]

function Mahsulot() {
    return (
        <>
            <section className='mahsulot'>
                <div className="container">
                    <div className="mahsulot__info">
                        <div className="mahsulot__info1">
                            <h1 className='mahsulot__heading'>Похожие товары</h1>
                            <img className='mahsulot__icon' src={Icon} alt="Icon" width="116" height="45" />
                        </div>
                        <ul className='mahsulot__list'>
                            {Mahsulotlar.map((mahsulot) => (
                                <li className='mahsulot__item' key={mahsulot.id}>
                                    <img className='mahsulot__img' src={mahsulot.img} alt="img" width={378} height={378} />
                                    <h2 className='mahsulot__title'>{mahsulot.title}</h2>
                                    <div className="mahsulot__div">
                                        <h3 className='mahsulot__headline'>{mahsulot.headline}</h3>
                                        <del className='mahsulot__text'>{mahsulot.text}</del>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="mahsulot__info2">
                        <div className="mahsulot__info1">
                            <h1 className='mahsulot__heading'>Посмотренное товары</h1>
                            <img className='mahsulot__icon1' src={Icon} alt="Icon" width="116" height="45" />
                        </div>
                        <ul className='mahsulot__list'>
                            {Mahsulotlar.map((mahsulot) => (
                                <li className='mahsulot__item' key={mahsulot.id}>
                                    <img className='mahsulot__img' src={mahsulot.img} alt="img" width={378} height={378} />
                                    <h2 className='mahsulot__title'>{mahsulot.title}</h2>
                                    <div className="mahsulot__div">
                                        <h3 className='mahsulot__headline'>{mahsulot.headline}</h3>
                                        <del className='mahsulot__text'>{mahsulot.text}</del>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="mahsulot__info3">
                        <div className="mahsulot__info1">
                            <h1 className='mahsulot__heading'>Такие же товары</h1>
                            <img className='mahsulot__icon2' src={Icon} alt="Icon" width="116" height="45" />
                        </div>
                        <ul className='mahsulot__list'>
                            {Mahsulotlar.map((mahsulot) => (
                                <li className='mahsulot__item' key={mahsulot.id}>
                                    <img className='mahsulot__img' src={mahsulot.img} alt="img" width={378} height={378} />
                                    <h2 className='mahsulot__title'>{mahsulot.title}</h2>
                                    <div className="mahsulot__div">
                                        <h3 className='mahsulot__headline'>{mahsulot.headline}</h3>
                                        <del className='mahsulot__text'>{mahsulot.text}</del>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Mahsulot;