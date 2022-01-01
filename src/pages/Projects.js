import React from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import raw from 'raw.macro';

import Main from '../layouts/Main';

import Cell from '../components/Projects/Cell';
import olddata from '../data/old_projects';
import lsedata from '../data/lse_projects';
import cmfdata from '../data/cmf';
import thesisdata from '../data/lse_thesis';

const markdown = raw('../data/abstract.md');

// Make all hrefs react router links
const LinkRenderer = ({ ...children }) => <Link {...children} />;

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

        <h3>1. Undergraduate Thesis  </h3>

        {thesisdata.map((project) => (
          <Cell
            data={project}
            key={project.title}
          />
        ))}

        <ReactMarkdown
          source={markdown}
          renderers={{
            Link: LinkRenderer,
          }}
          escapeHtml={false}
        />

        <h3>2. Comparative Metrics Framework </h3>

        {cmfdata.map((project) => (
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
