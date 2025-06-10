import React from 'react';
import { Link } from 'react-router-dom';

const CourseWork = () => {

  const lessons = [
    { id: 1, title: "Установка ПО", duration: "15 мин", path: "download_software" },
    { id: 2, title: "Создание проекта", duration: "20 мин", path: "create_project" },
    { id: 3, title: "#", duration: "25 мин", path: "/" },
    { id: 4, title: "#", duration: "30 мин", path: "/" },
    { id: 5, title: "#", duration: "20 мин", path: "/" },
  ];

  return (
    <section className='course'>
      <div className="course-header">
        <h1>Курсовой проект</h1>
        <div className="course-meta">
          <span>5 уроков</span>
          <span>•</span>
          <span>2 часа обучения</span>
        </div>
      </div>

      <div className="lessons-container">
        {lessons.map(lesson => (
          <Link
            to={lesson.path}
            className='lesson-card'
          >
            <div className="lesson-number">{lesson.id}</div>
            <div className="lesson-content">
              <h3>{lesson.title}</h3>
              <p>{lesson.duration}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CourseWork;