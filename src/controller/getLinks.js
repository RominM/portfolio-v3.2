import { btnRepo, btnWebsite } from '../view/buttons.js';

const handleSelect = (legend, repo, viewBtns) => {
  const all_legends = document.querySelectorAll('.legend');
  all_legends.forEach((legend) => {
    removeChild(legend);
  });

  repo.html_url && btnRepo(repo, viewBtns);
  const websiteBtn = '';
  websiteBtn && btnWebsite(viewBtns);

  legend.append(viewBtns);
};

const removeChild = (legend) => {
  const navigateBtn = document.querySelector('.navigate-btns');
  const links = document.querySelector('.links');

  legend.contains(navigateBtn) && navigateBtn.remove() & links.remove();
};

export { handleSelect, removeChild };
