import './Footer.scss'

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
                        <a href="/" className="footer__link">
                            <span className="footer__title">Информация</span>
                            </a>
                    </li>
                    <li className="footer__item">
                        <a href="/" className="footer__link">О “LegpromRF”</a>
                    </li>
                    <li className="footer__item">
                        <a href="/" className="footer__link">Реклама на сайте</a>
                    </li>
                    <li className="footer__item">
                        <a href="/" className="footer__link">Правила сайта</a>
                    </li>
                    <li className="footer__item">
                        <a href="/" className="footer__link">Защита персональных данных</a>
                    </li>
                </ul>
                <ul className="footer__list">
                    <li className="footer__item">
                        <a href="/" className="footer__link">
                            <span className="footer__title">Соискателю</span>
                            </a>
                    </li>
                    <li className="footer__item">
                        <a href="/" className="footer__link">Моё резюме</a>
                    </li>
                    <li className="footer__item">
                        <a href="/" className="footer__link">Поиск вакансии</a>
                    </li>
                    <li className="footer__item">
                        <a href="/" className="footer__link">Каталог компаний</a>
                    </li>
                    <li className="footer__item">
                        <a href="/" className="footer__link">Каталог профессий</a>
                    </li>
                </ul>

                <ul className="footer__list">
                    <li className="footer__item">
                        <a href="/" className="footer__link">
                            <span className="footer__title">Работодателю</span>
                            </a>
                    </li>
                    <li className="footer__item">
                        <a href="/" className="footer__link">Мои вакансии</a>
                    </li>
                    <li className="footer__item">
                        <a href="/" className="footer__link">Найти сотрудников</a>
                    </li>
                    <li className="footer__item">
                        <a href="/" className="footer__link">Производственный календарь</a>
                    </li>
                </ul>

                <ul className="footer__list">
                    <li className="footer__item">
                        <a href="/" className="footer__link">
                            <span className="footer__title">Профессии</span>
                            </a>
                    </li>
                    <li className="footer__item">
                        <a href="/" className="footer__link">Список профессий</a>
                    </li>
                </ul>

                <ul className="footer__list">
                    <li className="footer__item">
                        <a href="/" className="footer__link">
                            <span className="footer__title">Предприятия</span>
                            </a>
                    </li>
                    <li className="footer__item">
                        <a href="/" className="footer__link">Список предприятий</a>
                    </li>
                </ul>

                <ul className="footer__list">
                    <li className="footer__item">
                        <a href="/" className="footer__link">
                            <span className="footer__title">Курсы</span>
                            </a>
                    </li>
                    <li className="footer__item">
                        <a href="/" className="footer__link">Опубликовть курс</a>
                    </li>
                    <li className="footer__item">
                        <a href="/" className="footer__link">Список курсов</a>
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
                © 2023 LegpromRF
                </div>
                <div className="footer__develop">
                    Anval Team
                </div>
            </div>
         </div>
     </footer> 
     );
}
 
export default Footer;