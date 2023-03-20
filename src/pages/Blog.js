import React from 'react';
import Main from '../layouts/Main';
import Search from '../components/Blog/Search';
import data from '../data/blog/blog_data'

const Blog = () => (
  <Main
    title="Blog"
    description="Mun Fai's Blog Posts."
  >
    <article className="post">
      <header>
        <div className="title">
          <h2>Blog</h2>
          <p>My attempt at writing!</p>
        </div>
      </header>
      <div> 
        <div>
          <Search details={data}/>
        </div>  
      </div>
    </article>
  </Main>
);

export default Blog;
