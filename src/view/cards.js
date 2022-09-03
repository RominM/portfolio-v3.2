import { handleSelect, removeChild } from '../controller/getLinks.js';
import { getData } from '../model/request.js';
const picIsComming = '/public/images/Image-coming-soon.jpeg';
// const arrowImg = './../../public/images/circle-arrow-left-solid.svg';

const cards = async (repositories, newData) => {
  const listOfRepos = await getData(repositories);

  listOfRepos.forEach((repo) => {
    const main = document.querySelector('main');

    // get repo with star
    const card = document.createElement('a');
    card.classList.add('cards');
    card.id = repo.id;
    card.tabIndex = '0';

    if (repo.stargazers_count) {
      getCover(card, repo, newData);
      getLegend(card, repo, newData);
      // append only the repo with a star on GitHub
      main.append(card);
    }
  });
};

const getCover = (card, repo, newData) => {
  const cover = document.createElement('img');
  cover.classList.add('cover');

  newData.forEach((newD) => {
    repo.id === newD.id &&
      (newD.cover ? (cover.src = newD.cover) : (cover.src = picIsComming));
  });
  card.append(cover);
};

const getLegend = (card, repo, newData) => {
  const viewBtns = document.createElement('div');
  viewBtns.classList.add('navigate-btns');

  const legend = document.createElement('div');
  legend.classList.add('legend');
  legend.id = repo.id;
  legend.title = 'click to view options';

  legend.addEventListener('click', () => {
    handleSelect(legend, repo, viewBtns, newData);
  });
  legend.addEventListener('blur', () => {
    removeChild();
  });
  // Title Card
  const headLegend = document.createElement('div');
  headLegend.classList.add('head-legend');
  const h2 = document.createElement('h2');
  h2.innerHTML = repo.name.replaceAll('_', ' ').toUpperCase();
  // const arrow = document.createElement('img');
  // arrow.classList.add('arrow');
  // arrow.src = arrowImg;
  // arrow.title = 'return to the liste';

  headLegend.append(h2);
  legend.append(headLegend);

  // List of language
  const techList = document.createElement('ul');
  techList.classList.add('techList');
  newData.forEach((newD) => {
    if (repo.id === newD.id) {
      const logoArray = newD.tags;
      logoArray.forEach((tag) => {
        const li = document.createElement('li');
        li.classList.add('logo');
        const logo = document.createElement('img');
        logo.src = tag;
        li.append(logo);
        techList.append(li);
      });
    }
  });
  responsiveNav(legend);
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

const responsiveNav = (legend) => {
  const infoResp = document.createElement('p');
  infoResp.classList.add('info-resp');
  infoResp.innerHTML = 'Click to view options';

  legend.append(infoResp);
};

export { cards };
