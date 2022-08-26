import { ANNEXE_URL, GITHUB_URL } from './src/model/url.js';
// MODEL
import { convertData } from './src/model/convertData.js';
import { getData } from './src/model/request.js';
import { body, switchBtn } from './src/model/elements.js';
// VIEW
import { header } from './src/view/header.js';
import { cards } from './src/view/cards.js';
// CONTROLLER
import { switchTheme } from './src/controller/switch.js';

const initIndex = async () => {
  const github_data = await getData(GITHUB_URL);
  const repositories_url = github_data.repos_url;

  const annexe_data = await getData(ANNEXE_URL);
  const newData = await convertData(repositories_url, annexe_data);

  switchTheme(switchBtn, body);
  header(github_data);
  cards(repositories_url, newData);
};
initIndex();
