import React from 'react';
// import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Education from '../components/Resume/Education';
import Experience from '../components/Resume/Experience';
import Grades from '../components/Resume/Grades';
import Courses from '../components/Resume/Courses';
import Certs from '../components/Resume/Certs';

import courses from '../data/resume/courses';
import certs from '../data/resume/certs';
import degrees from '../data/resume/degrees';
import positions from '../data/resume/positions';
import { grades, categories } from '../data/resume/grades';

const sections = [
  'Education',
  'Experience',
  'Grades',
  'Courses',
  'Certs',
];

const Resume = () => (
  <Main
    title="Resume"
    description="Mun Fai's Resume."
  >
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2 data-testid="heading">Resume<a href="https://drive.google.com/file/d/1Ruut8YVB5e6vK1MIEtktbfJnfDO2VHND/view?usp=sharing"> (PDF)</a></h2>
          <div className="link-container">
            {sections.map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>))}
          </div>
        </div>
      </header>
      <Education data={degrees} />
      <Experience data={positions} />
      <Grades grades={grades} categories={categories} />
      <Courses data={courses} />
      <Certs data={certs} />

    </article>
  </Main>
);

export default Resume;
