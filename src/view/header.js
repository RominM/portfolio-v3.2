import { avatar, h1, location, tagsList } from '../model/elements.js';

const header = (data) => {
  h1.innerHTML = data.name;
  location.innerHTML = data.location;
  avatar.src = data.avatar_url;
  getTags();
};

const getTags = () => {
  const tags = ['music', 'space', 'technology', 'traveler'];

  tags.forEach((tag) => {
    const li = document.createElement('li');
    li.innerHTML = '#' + tag;
    tagsList.append(li);
  });
};

export { header };
