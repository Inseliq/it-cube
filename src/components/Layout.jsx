import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { usePageTitle } from '../app/utils/usePageTitle';

const Layout = () => {
  usePageTitle('/it-cube');

  return (
    <>
      <div className="container">
        <Header />
        <main className='component'>
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;