import './Header.scss'
import Location from '../Img/1page/Location.svg'
import Message from '../Img/1page/Message.svg'
import Logo from '../Img/1page/Logo.svg'
import Button from '../Img/1page/Group.svg'
import Like from '../Img/1page/Like.svg'
import Shopping from '../Img/1page/Shopping.svg'
import Profile from '../Img/1page/Profile.svg'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
            <header className='header'>
                <div className="container">
                    <div className="header__info">
                        <p className='header__text'>kharkivmebel - интернет-магазин качественной мебели</p>
                        <img className='header__icon' src={Location} alt="Location" width="16" height="20" />
                        <p className='header__text1'>Харьков</p>
                        <img className='header__icon1' src={Message} alt="Message" width="16" height="14" />
                        <p className='header__text2'>kharkivmebelinfo@gmail.com</p>
                    </div>

                    <div className="header__div">
                        <Link className='header__link' to="">
                            <img className='header__logo' src={Logo} alt="Logo" width="125" height="87" />
                        </Link>
                        <img className='header__btn' src={Button} alt="Button" width="158" height="58" />
                        <input className='header__input' type="text" placeholder='Искать Товар' />
                        <select className='header__select'>
                            <option value="number">+38093-717-29-29</option>
                            <option value="number">+38093-717-29-29</option>
                            <option value="number">+38093-717-29-29</option>
                        </select>
                        <Link to="EightPage">
                            <img className='header__like' src={Like} alt="Like" width="37" height="40" />
                        </Link>
                        
                        <Link to="ElevenPage">
                            <img className='header__shop' src={Shopping} alt="Shopping" width="38" height="40" />
                        </Link>

                        <Link to="TenPage">
                            <img className='header__profile' src={Profile} alt="Profile" width="26" height="34" />
                        </Link>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;