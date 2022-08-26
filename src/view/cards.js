import { handleSelect, removeChild } from '../controller/getLinks.js';
import { getData } from '../model/request.js';
const waitingImg = 'src/assets/Image-coming-soon.jpeg';

const cards = async (repositories, newData) => {
  const listOfRepos = await getData(repositories);
  console.log(listOfRepos);
  console.log(newData);

  listOfRepos.forEach((repo) => {
    // get repo with star
    const displayCondition = repo.stargazers_count;
    const card = document.createElement('a');
    card.classList.add('cards');
    card.id = repo.id;
    card.tabIndex = '0';

    getCover(card, repo, newData);
    getLegend(card, repo);

    // append only the repo with a star on GitHub
    const main = document.querySelector('main');
    displayCondition && main.append(card);
  });
};

const getCover = (card, repo, newData) => {
  const cover = document.createElement('img');
  newData.forEach((newD) => {
    if (repo.id === newD.id) {
      cover.src = newD.cover;
    }

    card.append(cover);
  });
};

const getLegend = (card, repo) => {
  const viewBtns = document.createElement('div');
  viewBtns.classList.add('navigate-btns');

  const legend = document.createElement('div');
  legend.classList.add('legend');
  legend.id = repo.id;
  legend.title = 'click to view options';

  legend.addEventListener('click', () => {
    handleSelect(legend, repo, viewBtns);
  });
  legend.addEventListener('blur', () => {
    removeChild();
  });
  // Title Card
  const h2 = document.createElement('h2');
  h2.innerHTML = repo.name.replaceAll('_', ' ').toUpperCase();
  legend.append(h2);

  // List of language
  const techList = document.createElement('ul');
  techList.classList.add('techList');
  const languages = repo.topics;
  languages.forEach((language) => {
    const li = document.createElement('li');
    li.innerHTML = language;
    techList.append(li);
  });
  legend.append(techList);

  // Descitpion
  getDescription(legend, repo);
  card.append(legend);
};

const getDescription = (legend, repo) => {
  const descriptContainer = document.createElement('div');
  descriptContainer.classList.add('description');

  const description = document.createElement('p');
  description.classList.add('description_p');
  description.innerHTML = repo.description
    ? repo.description
    : 'No description for this project at the moment';

  descriptContainer.append(description);
  legend.append(descriptContainer);
};

export { cards };
