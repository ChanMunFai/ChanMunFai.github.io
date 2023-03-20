import React from 'react';
import { Link } from 'react-router-dom';
import "./Card.css";

export default function Card({ post }) {
  // let linkTo;
  // if (post.id == 1) {
  //   linkTo = <Link to={`/blogposts/${post.id}`}>Learn more...</Link>;
  // } else {
  //   linkTo = <a href='google.com'>Learn more...</a>;
  // }
  
  let linkTo;
  linkTo = <Link to={`/blogposts/${post.id}`}>Learn more...</Link>;

  return (
    <div className="card" key={post.id}>
      <div>
        <h3>{post.title}</h3>
        <p>{post.description}</p>
        {linkTo}
      </div>
    </div>
  );
}

