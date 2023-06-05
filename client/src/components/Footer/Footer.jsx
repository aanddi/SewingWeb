import './Footer.scss'

import { Link } from 'react-router-dom'

import vk from '../../assets/Footer/icon/vk.svg'
import telegram from '../../assets/Footer/icon/telegram.svg'
import youtube from '../../assets/Footer/icon/youtube.svg'
import dzen from '../../assets/Footer/icon//dzen.svg'

const Footer = () => {
     return ( 
     <footer className="footer">
         <div className="footer__container">
            <nav className="footer__menu">

                <ul className="footer__list">
                    <li className="footer__item">
                        <h3 className="footer__title">Информация</h3>
                    </li>
                    <li className="footer__item">
                        <a href="/" className="footer__link">О SewingWeb</a>
                    </li>
                    <li className="footer__item">
                        <a href="/" className="footer__link">Реклама на SewingWeb</a>
                    </li>
                    <li className="footer__item">
                        <a href="/" className="footer__link">Разместить курсы на SewingWeb</a>
                    </li>
                    <li className="footer__item">
                        <a href="/" className="footer__link">Правила сайта</a>
                    </li>
                    <li className="footer__item">
                        <a href="/" className="footer__link">Защита персональных данных</a>
                    </li>
                    <li className="footer__item">
                        <a href="/" className="footer__link">Панель Администратора</a>
                    </li>
                </ul>

                <ul className="footer__list">
                    <li className="footer__item">
                        <h3 className="footer__title">Соискателю</h3>
                    </li>
                    <li className="footer__item">
                        <a href="/" className="footer__link">Моё резюме</a>
                    </li>
                    <li className="footer__item">
                        <Link to="/" className="footer__link">Поиск вакансии</Link>
                    </li>
                    <li className="footer__item">
                        <Link to="/enterprises" className="footer__link">Каталог компаний</Link>
                    </li>
                    <li className="footer__item">
                        <Link to="/professions" className="footer__link">Каталог профессий</Link>
                    </li>
                </ul>

                <ul className="footer__list">
                    <li className="footer__item">
                        <h3 className="footer__title">Работодателю</h3>
                    </li>
                    <li className="footer__item">
                        <a href="/" className="footer__link">Мои вакансии</a>
                    </li>
                    <li className="footer__item">
                        <Link to="/" className="footer__link">Найти сотрудников</Link>
                    </li>
                    <li className="footer__item">
                        <a 
                        target='__blank'
                        href="https://calendar.yoip.ru/work/2023-proizvodstvennyj-calendar.html" 
                        className="footer__link">
                            Производственный календарь
                        </a>
                    </li>
                </ul>

                <ul className="footer__list">
                    <li className="footer__item">
                        <h3 className="footer__title">Профессии</h3>
                    </li>
                    <li className="footer__item">
                        <Link to="/professions" className="footer__link">Список профессий</Link>
                    </li>
                </ul>

                <ul className="footer__list">
                    <li className="footer__item">
                        <h3 className="footer__title">Предприятия</h3>
                    </li>
                    <li className="footer__item">
                        <Link to="/enterprises" className="footer__link">Список предприятий</Link>
                    </li>
                </ul>

                <ul className="footer__list">
                    <li className="footer__item">
                        <h3 className="footer__title">Курсы</h3>
                    </li>
                    <li className="footer__item">
                        <a href="/" className="footer__link">Опубликовать курс</a>
                    </li>
                    <li className="footer__item">
                        <Link to="/courses" className="footer__link">Список курсов</Link>
                    </li>
                </ul>

            </nav>

            <div className="footer__social">
                <a href="/">
                    <img src={vk} alt="Вконтакте" />
                </a>
                <a href="/">
                    <img src={telegram} alt="Телеграм" />
                </a>
                <a href="/">
                    <img src={youtube} alt="Ютуб" />
                </a>
                <a href="/">
                    <img src={dzen} alt="Дзен" />
                </a>
            </div>

            <div className="footer__bottom">
                <div className="footer__text-company">
                © 2023 SewingWeb
                </div>
                <div className="footer__develop">
                   <a 
                   target='__blank'
                   href="https://github.com/aanddi/SewingWeb">Anval Team</a> 
                </div>
            </div>
            
         </div>
     </footer> 
     );
}
 
export default Footer;