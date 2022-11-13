import React from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import raw from 'raw.macro';

import Main from '../layouts/Main';

import Cell from '../components/Projects/Cell';
import oldData from '../data/projects/old_projects';
import lseData from '../data/projects/lse_projects';
import imperialData from '../data/projects/imperial_projects';
import cmfData from '../data/projects/cmf';
import thesisData from '../data/projects/lse_thesis';
import imperialThesis from '../data/projects/imperial_thesis';
import imperialGroup from '../data/projects/imperial_group';

const lseAbstract = raw('../data/projects/lse_abstract.md');
const hkvaeAbstract = raw('../data/projects/hkvae_abstract.md');
const sslAbstract = raw('../data/projects/ssl_abstract.md');

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
        <h2 data-testid="heading2">Best Projects</h2>

        <h3>1. Masters Thesis  </h3>

        {imperialThesis.map((project) => (
          <Cell
            data={project}
            key={project.title}
          />
        ))}

        <ReactMarkdown
          source={hkvaeAbstract}
          renderers={{
            Link: LinkRenderer,
          }}
          escapeHtml={false}
        />

        <h3>2. Masters Project  </h3>

        {imperialGroup.map((project) => (
          <Cell
            data={project}
            key={project.title}
          />
        ))}

        <ReactMarkdown
          source={sslAbstract}
          renderers={{
            Link: LinkRenderer,
          }}
          escapeHtml={false}
        />

        <h3>3. Undergraduate Thesis  </h3>

        {thesisData.map((project) => (
          <Cell
            data={project}
            key={project.title}
          />
        ))}

        <ReactMarkdown
          source={lseAbstract}
          renderers={{
            Link: LinkRenderer,
          }}
          escapeHtml={false}
        />

        <h3>2. R package (Internship) </h3>

        {cmfData.map((project) => (
          <Cell
            data={project}
            key={project.title}
          />
        ))}

      </div>

      <div className="subtitle_imperial">
        <h2 data-testid="heading3">Masters Projects</h2>
        <p>Projects I have done in Imperial.</p>
      </div>

      {imperialData.map((project) => (
        <Cell
          data={project}
          key={project.title}
        />
      ))}

      <div className="subtitle_lse">
        <h2 data-testid="heading4">Undergraduate Projects</h2>
        <p>Projects I have done in LSE.</p>
      </div>

      {lseData.map((project) => (
        <Cell
          data={project}
          key={project.title}
        />
      ))}

      <div className="subtitle_old">
        <h2 data-testid="heading5">Old Projects Dump</h2>
        <p>Some old and embarrassing projects that I have done a few years back.</p>
      </div>

      {oldData.map((project) => (
        <Cell
          data={project}
          key={project.title}
        />
      ))}

    </article>
  </Main>
);

export default Projects;
