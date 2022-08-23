const header = (data) => {
  const h1 = document.querySelector('h1');
  h1.innerHTML = data.name;
  const location = document.querySelector('br').nextElementSibling;
  location.innerHTML = data.location;
  const avatar = document.querySelector('.avatar');
  avatar.src = data.avatar_url;
  getTags();
};

const getTags = () => {
  const tagsList = document.querySelector('ul');
  const tags = ['music', 'space', 'technology', 'traveler'];

  tags.forEach((tag) => {
    const li = document.createElement('li');
    li.innerHTML = '#' + tag;
    tagsList.append(li);
  });
};

export { header };
