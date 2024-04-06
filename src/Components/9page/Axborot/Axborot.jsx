import './Axborot.scss'
import Group from '../../Img/Axborot/Group.svg'
import Icon from '../../Img/Axborot/icon.svg'

function Axborot() {
    return (
        <>
            <section className='axborot'>
                <div className="container">
                    <h1 className='axborot__heading'>Рассылки</h1>

                    <div className="axborot__info">
                        <div className="axborot__info1">
                            <h2 className='axborot__title'>Виды рассылок</h2>
                            <div className="axborot__info2">
                                <div className="axborot__div">
                                    <img className='axborot__icon' src={Group} alt="Group" width="18" height="18" />
                                    <h3 className='axborot__headline'>Новости, акции компании</h3>
                                </div>
                                <p className='axborot__text'>Будьте в курсе всех событий магазина, просматривайте обзоры.</p>
                            </div>

                            <div className="axborot__info3">
                                <div className="axborot__div">
                                    <img className='axborot__icon' src={Group} alt="Group" width="18" height="18" />
                                    <h3 className='axborot__headline'>Информация об акциях, промокодах и скидках</h3>
                                </div>
                                <p className='axborot__text1'>Периодически мы проводим акции со скидками, розыгрышами, промокодами и прочими инструментами, которые могут помочь вам сэкономить на покупке, подобрать подарок себе или близким. Мы обязательно сообщим вам о таких кампаниях, и вы сможете покупать на Розетке по самым лучшим ценам.</p>
                            </div>

                            <div className="axborot__info4">
                                <div className="axborot__div">
                                    <img className='axborot__icon' src={Icon} alt="Group" width="18" height="18" />
                                    <h3 className='axborot__headline'>Персональные рекомендации</h3>
                                </div>
                                <p className='axborot__text1'>Ежедневно мы изучаем поведение миллионов наших клиентов. Основываясь на этой информации, мы можем предложить вам товар, который мог бы вас заинтересовать.</p>
                            </div>

                            <div className="axborot__info3">
                                <div className="axborot__div">
                                    <img className='axborot__icon' src={Group} alt="Group" width="18" height="18" />
                                    <h3 className='axborot__headline'>Персональные скидки и предложения</h3>
                                </div>
                                <p className='axborot__text1'>Мы сообщим вам, если у нас появится скидка на товар, которым вы интересовались, товар, который вы добавили в список желаний, или товар, который подобрала наша рекомендационная система.</p>
                            </div>
                        </div>

                        <div className="axborot__info3">
                            <h4 className='axborot__title'>Каналы связи</h4>
                            <ul className='axborot__list'>
                                <li className='axborot__item'>
                                    <img className='axborot__icon1' src={Group} alt="Group" width="18" height="18" />
                                    <a className='axborot__link' href="#link">Email-письма</a>
                                </li>

                                <li className='axborot__item'>
                                    <img className='axborot__icon1' src={Group} alt="Group" width="18" height="18" />
                                    <a className='axborot__link' href="#link">Сообщения в Viber</a>
                                </li>

                                <li className='axborot__item'>
                                    <img className='axborot__icon1' src={Icon} alt="Icon" width="18" height="18" />
                                    <a className='axborot__link' href="#link">SMS-сообщения</a>
                                </li>

                                <li className='axborot__item'>
                                    <img className='axborot__icon1' src={Group} alt="Group" width="18" height="18" />
                                    <a className='axborot__link' href="#link">Уведомления в мобильном приложении</a>
                                </li>

                                <li className='axborot__item'>
                                    <img className='axborot__icon1' src={Group} alt="Group" width="18" height="18" />
                                    <a className='axborot__link' href="#link">Уведомления в веб-браузере</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Axborot;