import { btnRepo, btnWebsite } from '../view/buttons.js';

const handleSelect = (legend, repo, viewBtns, newData) => {
  const all_legends = document.querySelectorAll('.legend');
  all_legends.forEach((legend) => {
    removeChild(legend);
  });

  repo.html_url && btnRepo(repo, viewBtns);

  newData.forEach((newD) => {
    if (repo.id === newD.id) {
      const link = newD.link;
      link && btnWebsite(link, viewBtns);
    }
  });

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
