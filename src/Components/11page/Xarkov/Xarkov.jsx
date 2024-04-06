import './Xarkov.scss'

function Xarkov() {
    return (
        <>
            <section className='xarkov'>
                <div className="container">
                    <h1 className='xarkov__heading'>Доставка</h1>

                    <div className="xarkov__info">
                        <p className='xarkov__text'>Населенный пункт</p>
                        <hr className='xarkov__line' />
                        <p className='xarkov__text1'>Улица</p>
                        <hr className='xarkov__line' />
                        <p className='xarkov__text1'>Дом</p>
                        <hr className='xarkov__line' />
                        <p className='xarkov__text1'>Квартира</p>
                    </div>

                    <div className="xarkov__info1">
                        <p className='xarkov__text2'>Харьков</p>
                        <p className='xarkov__text2'>Улица 24/2</p>
                        <p className='xarkov__text2'>56</p>
                        <p className='xarkov__text2'>456</p>
                    </div>

                    <div className="xarkov__info2">
                        <a className='xarkov__link' href="#link">Добавить адрес</a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Xarkov;