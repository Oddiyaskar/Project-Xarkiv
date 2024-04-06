import './About.scss'
import Stol from '../../Img/1page/About/stol.png'
import Krovat from '../../Img/1page/About/krovat.png'
import Shkafcha from '../../Img/1page/About/shkafcha.png'
import Shkaf from '../../Img/1page/About/shkaf.png'
import Stul from '../../Img/1page/About/stul.png'
import Divan from '../../Img/1page/About/divan.png'
import Hammasi from '../../Img/1page/About/hammasi.png'

const mebel = [
    {
        id:0,
        img: Stol,
    },
    {
        id:1,
        img: Krovat,
    },
    {
        id:2,
        img: Shkafcha,
    },
    {
        id:3,
        img: Shkaf,
    },
    {
        id:4,
        img: Stul,
    },
    {
        id:5,
        img: Divan,
    },
]

const mebel1 = [
    {
        id:0,
        img: Stol,
    },
    {
        id:1,
        img: Krovat,
    },
    {
        id:2,
        img: Shkafcha,
    },
    {
        id:3,
        img: Shkaf,
    },
    {
        id:4,
        img: Stul,
    },
    {
        id:5,
        img: Hammasi,
    },
]

function About() {
    return (
        <>
            <section className='about'>
                <div className="container">
                    <ul className='about__list'>
                        {mebel.map((meb) => (
                            <li className='about__item' key={meb.id}>
                                <img className='about__img' src={meb.img} alt="img" width={276} height={236} />
                            </li>
                        ))}
                    </ul>

                    <ul className='about__list1'>
                        {mebel1.map((meb1) => (
                            <li className='about__item' key={meb1.id}>
                                <img className='about__img' src={meb1.img} alt="img" width={276} height={236} />
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </>
    )
}

export default About;