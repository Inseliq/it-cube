import React from 'react';
import { FaGithub, FaYoutube, FaTelegram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="layout">
    <div className="footer-container">
      {/* Контакты */}
      <address className="footer-column">
        <h4>Контактная информация</h4>
        <p>Email: info@it-cube.ru</p>
        <p>Телефон: +7 (999) 123-45-67</p>
        <div className="social-icons">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
          <a href="https://t.me" target="_blank" rel="noopener noreferrer"><FaTelegram /></a>
        </div>
      </address>

      {/* Полезные ссылки */}
      <div className="footer-column">
        <h4>Полезные материалы</h4>
        <ul>
          <li><Link to='/course_work'>Курсовая работа</Link></li>
          <li><Link to='/diplome_work'>Дипломная работа</Link></li>
          <li><Link to='/materials'>Полезные материалы</Link></li>
          <li><Link to='/prime'>Prime</Link></li>
        </ul>
      </div>

      {/* Поддержка */}
      <div className="footer-column">
        <h4>Нужна помощь?</h4>
        <p>По всем вопросам пишите нам в Telegram.</p>
        <p>Помощь в написании курсовых и дипломных работ.</p>
        <a className="footer-button" href="https://t.me" target="_blank" rel="noopener noreferrer">
          Написать в Telegram
        </a>
      </div>
    </div>

    <div className="footer-bottom">
      <p>© {new Date().getFullYear()} IT-Cube. Все права защищены.</p>
    </div>
  </footer>
);

export default Footer;