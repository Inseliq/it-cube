import React from 'react';
import { Routes, Route } from 'react-router-dom';
import '../../assets/css/root.css'
import Layout from '../../components/Layout';

// #Pages
import Home from '../../pages/Home';
import Prime from '../../pages/Prime';
import Materials from '../../pages/Materials';
import DiplomeWork from '../../pages/DiplomeWork';
import CourseWork from '../../pages/CourseWork';

// #CourseWork
import DownloadSoftware from '../../pages/course_work/DownloadSoftware';
import CreateProject from '../../pages/course_work/CreateProject';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>

        <Route index element={<Home />} />
        <Route path="course_work" element={<CourseWork />} />
        <Route path="diplome_work" element={<DiplomeWork />} />
        <Route path="materials" element={<Materials />} />
        <Route path="prime" element={<Prime />} />

        <Route path="course_work/download_software" element={<DownloadSoftware />} />
        <Route path="course_work/create_project" element={<CreateProject />} />
      </Route>
    </Routes>
  );
};

export default App;
