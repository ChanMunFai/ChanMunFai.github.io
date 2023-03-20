import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Chan Mun Fai</h2>
        <h2>陈文辉</h2>
        <p><a href="mailto:munfai98@gmail.com">munfai98@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I am Mun Fai! Mun rhymes with &apos;bun&apos; and Fai as in the Greek letter &Phi;.
      </p>
      <p>I am a graduate from Imperial and LSE, and am currently based in Singapore.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy;Mun Fai Chan <Link to="/">https://ChanMunFai.github.io</Link>.</p>
    </section>
  </section>
);

export default SideBar;
