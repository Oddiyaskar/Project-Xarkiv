import './Mebel.scss'
import Stol from '../../Img/2page/Mebel/stol.png'
import Krovat from '../../Img/2page/Mebel/krovat.png'
import Shkafcha from '../../Img/2page/Mebel/shkafcha.png'
import Shkaf from '../../Img/2page/Mebel/shkaf.png'
import Stul from '../../Img/2page/Mebel/stul.png'
import Hammasi from '../../Img/2page/Mebel/hammasi.png'
import Icon from '../../Img/2page/Mebel/icon.svg'
import Icons from '../../Img/2page/Mebel/icons.svg'

const Mebellar = [
    {
        id: 0,
        img: Stol,
    },
    {
        id: 1,
        img: Krovat,
    },
    {
        id: 2,
        img: Shkafcha,
    },
    {
        id: 3,
        img: Shkaf,
    },
    {
        id: 4,
        img: Stul,
    },
    {
        id: 5,
        img: Hammasi,
    },
]

function Mebel() {
    return (
        <>
            <section className='mebel'>
                <div className="container">
                    <div className="mebel__info">
                        <h1 className='mebel__heading'>Мебель для спальни</h1>
                        <p className='mebel__text'>250 товара</p>
                    </div>

                    <ul className='mebel__list'>
                        {Mebellar.map((mebels) => (
                            <li key={mebels.id} className='mebel__item'>
                                <img className='mebel__img' src={mebels.img} alt="mebels" width={250} height={236} />
                            </li>
                        ))}
                    </ul>

                    <div className="mebel__info1">
                        <h2 className='mebel__title'>Сортировка</h2>
                        <img className='mebel__icon' src={Icon} alt="Icon" width="240" height="44" />
                        <button className='mebel__btn'>Филтры</button>
                        <img className='mebel__icons https://www.youtube.com/watch?v=ycodxcBRpQw' src={Icons} alt="Icons" width="96" height="36" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Mebel;