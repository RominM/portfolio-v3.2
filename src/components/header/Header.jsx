import Tags from 'components/tags/Tags';
import React from 'react';
import './header.scss';

const Header = (props) => {
  const data = props.data;
  const tags = ['music', 'space', 'technology', 'traveler'];

  return (
    <header>
      <div className="description">
        <span>
          I'm <h1>{data.name}</h1>.
          <br />
          Front-end Developer from <span>{data.location}</span>
        </span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam in
          hic atque aut, pariatur quis minima, quisquam maiores cupiditate
          dicta, magnam obcaecati qui soluta. Vitae maxime dicta voluptatum
          laudantium adipisci?
        </p>
        <a href="contact.html" title="Keep in touch" className="contact">
          Contact me
        </a>
      </div>
      <div className="picture">
        <a href="index.html">
          <img src={data.avatar_url} alt="my avatar" className="avatar" />
        </a>
        <Tags tags={tags} />
      </div>
    </header>
  );
};

export default Header;
