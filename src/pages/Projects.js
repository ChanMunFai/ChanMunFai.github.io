import React from 'react';
import Main from '../layouts/Main';
import Search from '../components/Projects/Search';
import data from '../data/projects/project_data'

const Projects = () => (
  <Main
    title="Projects"
    description="Mun Fai's Projects."
  >
    <article className="post">
      <header>
        <div className="title">
          <h2>Projects</h2>
          <p>Some cool stuff that I have done!</p>
        </div>
      </header>
      <div className='HomeContainer'> 
        <div className='cards'>
          <Search details={data}/>
        </div> 
      </div>
    </article>
  </Main>
);

export default Projects;
