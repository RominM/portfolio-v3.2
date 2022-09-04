import { ANNEXE_URL, GITHUB_URL } from './src/model/url.js';
// MODEL
import { convertData } from './src/model/convertData.js';
import { getData } from './src/model/request.js';
// VIEW
import { header } from './src/view/header.js';
import { cards } from './src/view/cards.js';

const initIndex = async () => {
  const github_data = await getData(GITHUB_URL);
  const repositories_url = github_data.repos_url;

  const annexe_data = await getData(ANNEXE_URL);

  const newData = await convertData(repositories_url, annexe_data);

  setTimeout(() => {
    header(github_data);
    cards(repositories_url, newData);
    const load = document.querySelector('.loading');
    load.style.opacity = '0';
    load.style.zIndex = '-999';
  }, 1000);
};
initIndex();
