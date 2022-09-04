import { GITHUB_URL } from './src/model/url.js';
// MODEL
import { getData } from './src/model/request.js';
// VIEW
import { header } from './src/view/header.js';
import { form } from './src/controller/form.js';

const initIndex = async () => {
  const github_data = await getData(GITHUB_URL);
  header(github_data);
  form();
};
initIndex();
