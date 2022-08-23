const loading = (setLoader) => {
  setTimeout(() => {
    setLoader(false);
  }, 3500);
};

export { loading };
