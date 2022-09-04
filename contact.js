import { GITHUB_URL } from './src/model/url.js';
// MODEL
import { getData } from './src/model/request.js';
// VIEW
import { header } from './src/view/header.js';
import { form } from './src/controller/form.js';

const initIndex = async () => {
  const github_data = await getData(GITHUB_URL);
  setTimeout(() => {
    header(github_data);
    form();
    const load = document.querySelector('.loading');
    load.style.opacity = '0';
    load.style.zIndex = '-999';
  }, 250);
};
initIndex();
