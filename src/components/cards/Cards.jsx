import React from 'react';
import './card.scss';
const waitingImg = require('./../../assets/Image-coming-soon.jpeg');

const Cards = (props) => {
  // I don't want to display all repositories
  const repositories = props.repositories;

  return (
    <ul className="list-repo">
      {repositories.map(
        (repo) =>
          // condition to display, stargazers_count should be === 1
          repo.stargazers_count === 1 && (
            <li key={repo.id} tabIndex="0" className="cards">
              <a href="#">
                <img src={waitingImg} alt="" />
                <div className="navigate-btns">
                  <div
                    id={repo.id}
                    className="legend"
                    title="click to view options"
                  >
                    <h2>{repo.name.replaceAll('_', ' ').toUpperCase()}</h2>
                    <ul className="techList">
                      {repo.topics.map((topic) => (
                        <li key={topic}>{topic}</li>
                      ))}
                      <div className="project_descript">
                        {repo.description
                          ? repo.description
                          : 'No description for this project at the moment'}
                      </div>
                    </ul>
                  </div>
                </div>
              </a>
            </li>
          )
      )}
    </ul>
  );
};

export default Cards;
