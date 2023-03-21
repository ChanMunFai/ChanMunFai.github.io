import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './layouts/Main'; // fallback for lazy pages
import './static/css/main.scss'; // All of our styles

// Blog Posts
import ProjectData from './data/projects/project_data';
import BlogData from './data/blog/blog_data';

const { PUBLIC_URL } = process.env;

const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Index = lazy(() => import('./pages/Index'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Resources = lazy(() => import('./pages/Resources'));
const Resume = lazy(() => import('./pages/Resume'));
const Stats = lazy(() => import('./pages/Stats'));
const Projects = lazy(() => import('./pages/Projects'));
const ProjectPost = lazy(() => import('./components/ProjectPost/ProjectPost'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./components/BlogPost/BlogPost'));

const App = () => (
  <BrowserRouter basename={PUBLIC_URL}>
    <Suspense fallback={<Main />}>
      <Routes>
        <Route exact path="/" element={<Index/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/resources" element={<Resources/>} />
        <Route path="/stats" element={<Stats/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/resume" element={<Resume/>} />
        <Route path="/projectsposts/:id" element={<ProjectPost data={ProjectData}/>} />
        <Route path="/blogposts/:id" element={<BlogPost data={BlogData}/>} />
        <Route element={<NotFound/>} status={404} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default App;
