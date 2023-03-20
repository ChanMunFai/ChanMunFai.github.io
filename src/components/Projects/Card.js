import React from 'react';
import { Link } from 'react-router-dom';
import "./Card.css";

export default function Card({ post }) {
  let linkTo;
  if (post.id <= 3) {
    linkTo = <Link to={`/projectsposts/${post.id}`}>Learn more...</Link>;
  } else {
    linkTo = <a href={post.link}>Learn more...</a>;
  }

  return (
    <div className="card" key={post.id}>
      <div className="img-wrapper">
        <img
          src={post.image}
          alt={post.title}
        ></img>
      </div>
      <div>
        <h3>{post.title}</h3>
        <p className="card-content">{post.content.slice(0, 200)}</p>
        {linkTo}
      </div>
    </div>
  );
}

