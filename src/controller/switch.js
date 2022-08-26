const switchTheme = (switchBtn, body) => {
  switchBtn.addEventListener('click', () => {
    switchBtn.checked
      ? body.classList.remove('dark-theme')
      : body.classList.add('dark-theme');
  });
};

export { switchTheme };
