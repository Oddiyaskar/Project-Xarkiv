import './Tovar.scss'
import One from '../../Img/2page/Tovar/1.png'
import Two from '../../Img/2page/Tovar/2.png'
import Three from '../../Img/2page/Tovar/3.png'
import Four from '../../Img/2page/Tovar/4.png'
import Five from '../../Img/2page/Tovar/5.png'
import Six from '../../Img/2page/Tovar/6.png'
import Pager from '../../Img/2page/Tovar/pager.svg'

const Tovarlar = [
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
    {
        id: 4,
        img: Five,
        title: 'Диван "Ergonomic Rubber Shoes”',
        headline: '35 990 ₽',
        text: '75 430 ₽',
    },
    {
        id: 5,
        img: Six,
        title: 'Диван "Ergonomic Rubber Shoes”',
        headline: '35 990 ₽',
        text: '75 430 ₽',
    },
]

function Tovar() {
    return (
        <>
            <section className='tovar'>
                <div className="container">
                    <ul className='tovar__list'>
                        {Tovarlar.map((tovars) => (
                            <li className='tovar__item' key={tovars.id}>
                                <img className='tovar__img' src={tovars.img} alt="img" width={378} height={378} />
                                <h2 className='tovar__title'>{tovars.title}</h2>
                                <div className="tovar__div">
                                    <h2 className='tovar__headline'>{tovars.headline}</h2>
                                    <del className='tovar__text'>{tovars.text}</del>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <ul className='tovar__list'>
                        {Tovarlar.map((tovars) => (
                            <li className='tovar__item' key={tovars.id}>
                                <img className='tovar__img' src={tovars.img} alt="img" width={378} height={378} />
                                <h2 className='tovar__title'>{tovars.title}</h2>
                                <div className="tovar__div">
                                    <h2 className='tovar__headline'>{tovars.headline}</h2>
                                    <del className='tovar__text'>{tovars.text}</del>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <div className="tovar__info">Показать Еще</div>

                    <img className='tovar__icon' src={Pager} alt="Pager" width="432" height="48" />
                </div>
            </section>
        </>
    )
}

export default Tovar;