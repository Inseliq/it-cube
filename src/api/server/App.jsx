import React from 'react';
import { Routes, Route } from 'react-router-dom';
import '../../assets/css/root.css'
import Layout from '../../components/Layout';
import Home from '../../pages/Home';
import DownloadSoftware from '../../pages/course_work/DownloadSoftware';
import CreateProject from '../../pages/course_work/CreateProject';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="course_work/download_software" element={<DownloadSoftware />} />
        <Route path="course_work/create_project" element={<CreateProject />} />
      </Route>
    </Routes>
  );
};

export default App;
