import { getData } from './request.js';

const convertData = async (repositories, annexe_data) => {
  const reposFromApi = await getData(repositories);
  const reposFromJson = annexe_data;

  reposFromApi.forEach((repoApi) => {
    const nameRepoApi = repoApi.name
      .toLowerCase()
      .split('_')
      .join('')
      .split('-')
      .join('');
    console.log('api ', nameRepoApi);
    reposFromJson.forEach((repoJson) => {
      const nameRepoJson = repoJson.title.toLowerCase().split(' ').join('');
      console.log('json ', nameRepoJson);
      nameRepoApi === nameRepoJson && (repoJson.id = repoApi.id);
    });
  });
  console.log(reposFromApi);
  console.log(reposFromJson);
  return annexe_data;
};

export { convertData };
