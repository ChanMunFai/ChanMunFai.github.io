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
      <p> Nice to meet you. Please feel free to read more <Link to="/about">about me</Link>,
        or check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        view <Link to="/stats">site statistics</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
      </p>
      <p>Credits for the website design go to <a href="https://github.com/mldangelo/personal-site/"> Michael D Angelo.</a></p>
    </article>
  </Main>
);

export default Index;
