import React from 'react';

const Tags = (props) => {
  const tags = props.tags;
  return (
    <ul className="tags">
      {tags.map((tag, i) => (
        <li key={i}>#{tag}</li>
      ))}
    </ul>
  );
};

export default Tags;
