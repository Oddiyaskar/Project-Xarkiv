import './Karusel.scss'
import Banner from '../../Img/1page/banner.png'
import Banner1 from '../../Img/1page/banner1.png'

function Karusel() {
    return (
        <>
            <section className='karusel'>
                <div className="container">
                    <div className="karusel__div">
                        <img className='karusel__img' src={Banner} alt="banner" />
                        <img className='karusel__imgg' src={Banner1} alt="banner" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Karusel;