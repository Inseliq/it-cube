import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const TITLE_MAP = {
  '/': 'It-Cube',
  '/course_work/download_software': 'Установка VS Code и VS',
  '/course_work/create_project': 'Создание проекта',
};

export function usePageTitle(basename = '') {
  const { pathname } = useLocation();

  useEffect(() => {
    const path = basename && pathname.startsWith(basename)
      ? pathname.slice(basename.length) || '/'
      : pathname;

    const title = TITLE_MAP[path] || 'It-Cube';  // дефолт
    document.title = title;
  }, [pathname, basename]);
}