import { btnRepo, btnWebsite } from '../view/buttons.js';

const handleSelect = (legend, repo, viewBtns, newData) => {
  const all_legends = document.querySelectorAll('.legend');
  all_legends.forEach((legend) => {
    removeChild(legend);
  });
  let websiteBtn;
  newData.forEach((newD) => {
    repo.id === newD.id && (websiteBtn = newD.link);
  });

  repo.html_url && btnRepo(repo, viewBtns);
  websiteBtn && btnWebsite(viewBtns);

  legend.append(viewBtns);
};

const removeChild = (legend) => {
  const navigateBtn = document.querySelector('.navigate-btns');
  const repoBtn = document.querySelector('.repo-btn');
  const websiteBtn = document.querySelector('.website-btn');

  if (legend.contains(navigateBtn)) {
    navigateBtn.remove() & repoBtn.remove();
    websiteBtn && websiteBtn.remove();
  }
};

export { handleSelect, removeChild };
