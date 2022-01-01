import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Projects/Cell';
import olddata from '../data/old_projects';
import lsedata from '../data/lse_projects';
import cmfdata from '../data/cmf';
import thesisdata from '../data/lse_thesis';

const Projects = () => (
  <Main
    title="Projects"
    description="Learn about Mun Fai's projects."
  >
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/projects">Projects</Link></h2>
          <p>A whole range of projects that I have done at various stages in my life.</p>
        </div>
      </header>

      <div className="subtitle">
        <h2 data-testid="heading">Best Projects</h2>
        <p>Some other projects, which I will categorise further.</p>

        {cmfdata.map((project) => (
          <Cell
            data={project}
            key={project.title}
          />
        ))}

        <p>Here is some filler text to describe more on the cmf package.</p>

        {thesisdata.map((project) => (
          <Cell
            data={project}
            key={project.title}
          />
        ))}

        <p>Here is some filler text to describe more on the cmf package.</p>
      </div>

      <div className="subtitle_lse">
        <h2 data-testid="heading">LSE Projects</h2>
        <p>Projects I have done in LSE.</p>
      </div>

      {lsedata.map((project) => (
        <Cell
          data={project}
          key={project.title}
        />
      ))}

      <div className="subtitle_old">
        <h2 data-testid="heading">Old Projects Dump</h2>
        <p>Some old and embarrassing projects that I have done a few years back.</p>
      </div>

      {olddata.map((project) => (
        <Cell
          data={project}
          key={project.title}
        />
      ))}

    </article>
  </Main>
);

export default Projects;
