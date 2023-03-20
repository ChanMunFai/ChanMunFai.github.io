import {React, useEffect, useState} from 'react';
import Main from '../../layouts/Main';
import { useParams } from 'react-router';
import Markdown from '../Markdown';
import raw from 'raw.macro';

const BlogPost = ({ data }) => {
  
  const params = useParams();
  const post = data.find((dataItem) => dataItem.id === params.id);

  const [content, setContent] = useState('');
  
  useEffect(() => {
    if (post.id == 1) {
      setContent(raw('../../data/blog/vae.md'));
    } else if (post.id == 2) {
      setContent(raw('../../data/blog/whisper_sg.md'));
    }
  }, [post.id]);  
  
  return (
    <Main 
      title="Blog Posts" 
      description="Mun Fai's Blog Posts"
    >
      <article className="post">
        <header>
          <div className="title">
            <h2>{post.title}</h2>
            <h3>{post.subtitle}</h3>
            <p>{post.date}</p>
          </div> 
        </header>
        <Markdown>{content}</Markdown>
      </article>
    </Main>
  );
};

export default BlogPost;
