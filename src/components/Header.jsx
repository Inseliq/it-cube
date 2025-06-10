import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const headerRef = useRef(null);

  const toggleMenu = (menuId) => {
    setOpenMenu((prev) => (prev === menuId ? null : menuId));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleLinkClick = () => {
    setOpenMenu(null);
  };

  return (
    <header ref={headerRef} className='layout'>
      <nav data-device="desktop">
        <Link to="/" className="home" onClick={handleLinkClick}>
          <img src="/img/banner.png" alt="it-cube" /> IT-Cube
        </Link>
        <hr />

        {/* Курсовая работа */}
        <div className="menu course" data-open={openMenu === 'course'}>
          <button id="course" onClick={() => toggleMenu('course')}>
            <img src="/img/course_work.png" alt="course" /> Курсовая работа
          </button>
          <div className="content-menu">
            <Link to="/course_work/download_software" onClick={handleLinkClick}>
              Установка ПО
            </Link>
            <Link to="/course_work/create_project" onClick={handleLinkClick}>
              Создание проекта
            </Link>
          </div>
        </div>

        {/* Дипломная работа */}
        <div className="menu diplome" data-open={openMenu === 'diplome'}>
          <button id="diplome" onClick={() => toggleMenu('diplome')}>
            <img src="/img/diplome_project.png" alt="diplome" /> Дипломная работа
          </button>
          <div className="content-menu">
            <span>Раздел находится в разработке 🛠</span>
          </div>
        </div>

        {/* Уроки */}
        <div className="menu lessons" data-open={openMenu === 'lessons'}>
          <button id="lessions" onClick={() => toggleMenu('lessons')}>
            <img src="/img/lessions.png" alt="lessons" />Полезные материалы
          </button>
          <div className="content-menu">
            <span>Раздел находится в разработке 🛠</span>
          </div>
        </div>

        <button className="prime">
          <img src="/img/prime_icon.png" alt="prime" /> Prime
        </button>
      </nav>

      <nav data-device="mobile">
        <Link className='home' to="/" onClick={handleLinkClick}>
          <img src="/img/banner.png" alt="it-cube" />
          IT-Cube
        </Link>
        <hr />
        <Link to="/" onClick={handleLinkClick}>
          <img src="/img/course_work.png" alt="course" />
        </Link>
        <Link to="/" onClick={handleLinkClick}>
          <img src="/img/diplome_project.png" alt="diplome" />
        </Link>
        <Link to="/" onClick={handleLinkClick}>
          <img src="/img/lessions.png" alt="lessons" />
        </Link>
        <Link className='prime' to="/" onClick={handleLinkClick}>
          <img src="/img/prime_icon.png" alt="prime" /> Prime
        </Link>
      </nav>
    </header>
  );
};

export default Header;