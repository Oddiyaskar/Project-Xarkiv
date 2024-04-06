import './Ferrum.scss'
import Image from '../../Img/3page/Ferrum/image.png'
import Group from '../../Img/3page/Ferrum/Group.png'
import Star from '../../Img/3page/Ferrum/star.svg'
import Like from '../../Img/3page/Ferrum/like.svg'
import Icons from '../../Img/3page/Ferrum/Icons.svg'
import Kok from '../../Img/3page/Ferrum/kok.png'
import Color from '../../Img/3page/Ferrum/Color.svg'

const Ferrums = [
    {
        id: 0,
        img: Image,
    },
    {
        id: 1,
        img: Image,
    },
    {
        id: 2,
        img: Image,
    },
    {
        id: 3,
        img: Image,
    },
]

const Mebels = [
    {
        id: 0,
        img: Kok,
        title: 'Диван "Ergonomic Rubber Shoes”',
        headline: '35 990 ₽',
        text: '75 430 ₽',
    },
    {
        id: 1,
        img: Kok,
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
]

function Ferrum() {
    return (
        <>
            <section className='ferrum'>
                <div className="container">
                    <ul className='ferrum__list'>
                        {Ferrums.map((ferrum) => (
                            <li className='ferrum__item' key={ferrum.id}>
                                <img className='ferrum__img' src={ferrum.img} alt="Image" width={96} height={96} />
                            </li>
                        ))}
                    </ul>
                    <img className='ferrum__img1' src={Group} alt="Group" width={744} height={654} />
                    <div className="ferrum__info">
                        <h1 className='ferrum__heading'>Вешалка 10 Ferrumon</h1>
                        <ul className='ferrum__list1'>
                            <li className='ferrum__item1'>
                                <p className='ferrum__text'>Оценка покупателей:</p>
                                <img className='ferrum__icon' src={Star} alt="Star" width="116" height="20" />
                                <span className='ferrum__span'>Нет отзывов</span>
                            </li>

                            <li className='ferrum__item2'>
                                <p className='ferrum__text1'>Код товара:</p>
                                <h2 className='ferrum__heading1'>i00078385</h2>
                            </li>

                            <li className='ferrum__item3'>
                                <p className='ferrum__textt'>Цвет:</p>
                                <img className='ferrum__iconca' src={Color} alt="Color" width="154" height="42" />
                            </li>

                            <li className='ferrum__item4'>
                                <div className="ferrum__div">
                                    <del className='ferrum__del'>4,700 руб</del>
                                    <h3 className='ferrum__title'>2,700 руб</h3>
                                </div>

                                <div className="ferrum__div1">
                                    <button className='ferrum__btn'>Купить</button>
                                    <img className='ferrum__like' src={Like} alt="Like" width="53" height="53" /> <br />
                                    <button className='ferrum__btn1'>Купить в кредит</button>
                                </div>
                            </li>

                            <li className='ferrum__item5'>
                                <p className='ferrum__text2'>Оплата частями: 5 x 3 751 грн.</p>
                                <img className='ferrum__icon1' src={Icons} alt="Icons" width="207" height="37" />
                            </li>
                        </ul>

                        <div className="ferrum__info1">
                            <h3 className='ferrum__headline'>Размер и Характеристики</h3>
                            <p className='ferrum__text3'>Материал корпуса ............................................................ <span className='ferrum__span1'>Металл</span></p>
                            <p className='ferrum__text3'>Изготовитель .................................................................... <span className='ferrum__span1'>Украина</span></p>
                        </div>

                        <div className="ferrum__info1">
                            <h3 className='ferrum__headline1'>Описание</h3>
                            <p className='ferrum__text4'>Вешалка в прихожую из прочного металла из серии "Ferrumon"; Металл покрыт специальной краской, которая защищает металл от коррозии продлевает срок службы; Обратите внимание, что цветопередача фото с каталога может отличаться от цветов в живом виде из-за особенностей передачи цветов монитора Вашего компьютера, ноутбука, планшета и т.д.</p>
                        </div>
                    </div>

                    <div className="ferrum__info2">
                        <h4 className='ferrum__heading2'>Посмотренное:</h4>

                        <ul className='ferrum__list2'>
                            {Mebels.map((mebel) => (
                                <li className='ferrum__item6' key={mebel.id}>
                                    <img className='ferrum__img2' src={mebel.img} alt="img" width={196} height={150} />
                                    <h5 className='ferrum__title2'>{mebel.title}</h5>
                                    <div className="ferrum__div2">
                                        <h6 className='ferrum__headline2'>{mebel.headline}</h6>
                                        <del className='ferrum__text5'>{mebel.text}</del>
                                    </div>
                                    <h6></h6>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Ferrum;