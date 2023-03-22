import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Mun Fai's personal website. Economics and Artificial Intelligence student"}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">HEY THERE!</Link></h2>
          <p>
            I am Mun Fai.
          </p>
        </div>
      </header>
      <p> 
        Nice to meet you!
        I am a recent graduate and have a Masters in Artificial Intelligence 
        and Bachelors in Economics. I am joining the public service in future, 
        and hope to explore how data and tech can improve society. 
      </p>
      <p>
        Please feel free to check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        <Link to="/blog">blog posts</Link>, {' '}
        view <Link to="/stats">site statistics</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
      </p>
      <p>Acknowledgements: <a href="https://github.com/mldangelo/personal-site/"> Michael D Angelo.</a></p>
    </article>
  </Main>
);

export default Index;
