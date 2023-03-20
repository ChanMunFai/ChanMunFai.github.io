import React, { useState } from 'react';
import Main from '../../layouts/Main';
import { useParams } from 'react-router';

import ImperialThesis from '../../data/projects/imperial_thesis'
import ImperialGroup from '../../data/projects/imperial_group'
import LseThesis from '../../data/projects/lse_thesis'

const ProjectPost = ({ data }) => {
  const params = useParams();
  const post = data.find((dataItem) => dataItem.id === params.id);
  
  let Component = null;
  if (post.id === '1') {
    Component = ImperialThesis;
  } 
  else if (post.id === '2') {
    Component = ImperialGroup;
  }
  else if (post.id === '3') {
    Component = LseThesis;
  }
  else {
    Component = null;
  }
  
  return (
    <Main 
      title="Projects" 
      description="Mun Fai's Projects"
    >
      <article className="post">
        <header>
          <div className="title">
            <h2>{post.title}</h2>
            <h3>{post.subtitle}</h3>
          </div> 
        </header>
        {Component && <Component />}
      </article>
    </Main>
  );
};

export default ProjectPost;
