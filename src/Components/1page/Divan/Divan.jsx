import './Divan.scss';
import Icon from '../../Img/1page/Divanlar/icon.svg'
import Oq from '../../Img/1page/Divanlar/oq.png'
import Stol from '../../Img/1page/Divanlar/stol.png'
import Kok from '../../Img/1page/Divanlar/kok.png'
import Malla from '../../Img/1page/Divanlar/malla.png'
import Malla1 from '../../Img/1page/Stullar/malla.png'
import Qora from '../../Img/1page/Stullar/qora.png'
import Oq1 from '../../Img/1page/Stullar/Oq.png'
import Img from '../../Img/1page/Stullar/Img.png'
import Iconca from '../../Img/1page/Stullar/icon.svg'

const Divanlar = [
    {
        id: 0,
        img: Oq,
        title: 'Диван "Ergonomic Rubber Shoes”',
        headline: '35 990 ₽',
        text: '75 430 ₽',
    },
    {
        id: 1,
        img: Stol,
        title: 'Диван "Ergonomic Rubber Shoes”',
        headline: '35 990 ₽',
        text: '75 430 ₽',
    },
    {
        id: 2,
        img: Kok,
        title: 'Диван "Ergonomic Rubber Shoes”',
        headline: '35 990 ₽',
        text: '75 430 ₽',
    },
    {
        id: 3,
        img: Malla,
        title: 'Диван "Ergonomic Rubber Shoes”',
        headline: '35 990 ₽',
        text: '75 430 ₽',
    },
]

const Stullar = [
    {
        id: 0,
        img: Malla1,
        title: 'Диван "Ergonomic Rubber Shoes”',
        headline: '35 990 ₽',
        text: '75 430 ₽',
    },
    {
        id: 1,
        img: Qora,
        title: 'Диван "Ergonomic Rubber Shoes”',
        headline: '35 990 ₽',
        text: '75 430 ₽',
    },
    {
        id: 2,
        img: Oq1,
        title: 'Диван "Ergonomic Rubber Shoes”',
        headline: '35 990 ₽',
        text: '75 430 ₽',
    },
    {
        id: 3,
        img: Img,
        title: 'Диван "Ergonomic Rubber Shoes”',
        headline: '35 990 ₽',
        text: '75 430 ₽',
    },
]

function Divan() {
    return (
        <>
            <section className='divan'>
                <div className="container">
                    <div className="divan__info1">
                        <div className="divan__info">
                            <h1 className='divan__heading'>Хиты продаж</h1>
                            <img className='divan__icon' src={Icon} alt="icon" width="116" height="45" />
                        </div>

                        <ul className='divan__list'>
                            {Divanlar.map((divan) => (
                                <li className='divan__item' key={divan.id}>
                                    <img className='divan__img' src={divan.img} alt="img" width={378} height={378} />
                                    <h2 className='divan__title'>{divan.title}</h2>
                                    <div className="divan__div">
                                        <h2 className='divan__headline'>{divan.headline}</h2>
                                        <del className='divan__text'>{divan.text}</del>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="divan__info2">
                        <div className="divan__info">
                            <h1 className='divan__heading'>Наши Новинки</h1>
                            <img className='divan__icons' src={Iconca} alt="icon" width="116" height="45" />
                        </div>

                        <ul className='divan__list1'>
                            {Stullar.map((stul) => (
                                <li className='divan__item' key={stul.id}>
                                    <img className='divan__img' src={stul.img} alt="img" width={378} height={378} />
                                    <h2 className='divan__title'>{stul.title}</h2>
                                    <div className="divan__div">
                                        <h2 className='divan__headline'>{stul.headline}</h2>
                                        <del className='divan__text'>{stul.text}</del>
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

export default Divan;