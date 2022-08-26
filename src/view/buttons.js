const btnRepo = (repo, viewBtns) => {
  const repoBtn = document.createElement('a');
  repoBtn.classList.add('repo-btn', 'links');
  repoBtn.innerHTML = 'view repo';
  repoBtn.href = repo.html_url;
  viewBtns.append(repoBtn);
};

const btnWebsite = (viewBtns) => {
  const websiteBtn = document.createElement('a');
  websiteBtn.classList.add('website-btn', 'links');
  websiteBtn.innerHTML = 'visit website';
  websiteBtn.href = '';
  viewBtns.append(websiteBtn);
};

export { btnRepo, btnWebsite };
