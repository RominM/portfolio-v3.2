import { btnRepo, btnWebsite } from '../view/buttons.js';

const handleSelect = (legend, repo, viewBtns) => {
  const repoLink = repo.html_url;
  const websiteBtn = '';

  repoLink && btnRepo(repo, viewBtns);
  websiteBtn && btnWebsite(viewBtns);

  legend.append(viewBtns);
};

export { handleSelect };
