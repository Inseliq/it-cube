import React from 'react';
import { FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa';

const Footer = () => (
  <footer className="layout">
    <div className="footer-container">
      <p>© {new Date().getFullYear()} IT-Cube. Все права защищены.</p>
      <div className="social-icons">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://t.me" target="_blank" rel="noopener noreferrer"><FaTelegram /></a>
      </div>
    </div>
  </footer>
);

export default Footer;