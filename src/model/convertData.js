import { getData } from './request.js';

const convertData = async (repositories, annexe_data) => {
  const listOfRepos = await getData(repositories);
  const nameAn = annexeNames(annexe_data);
  listOfRepos.forEach((repo) => {
    nameAn.forEach((nameB) => {
      repo.name === nameB &&
        annexe_data.forEach((anData) => {
          anData.id = repo.id;
        });
    });
  });
  return annexe_data;
};

const annexeNames = (annexe_data) => {
  let namesAnnexe = [];
  annexe_data.forEach((repo) => {
    namesAnnexe.push(repo.title);
  });
  return namesAnnexe;
};

export { convertData };
