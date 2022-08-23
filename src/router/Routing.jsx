// React
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Models
import { GITHUB_URL } from 'models/url';
import { getData } from 'models/getData';
// Views
import Header from 'views/layout/header/Header';
import Home from 'views/Pages/Home/Home';
import Loader from 'components/loader/Loader';
// Controllers
import { loading } from 'controllers/loading';
import Toggle from 'components/toggle/Toggle';

const Routing = () => {
  const [loader, setLoader] = useState(true);
  const [data, setData] = useState(null);
  const [repos, setRepos] = useState(null);
  const [value, setValue] = useState(false);

  useEffect(() => {
    loading(setLoader);
    const getGithubData = async () => {
      const github_data = await getData(GITHUB_URL);
      setData(github_data);
      const repos = await getData(github_data.repos_url);
      setRepos(repos);
    };
    getGithubData();
  }, []);

  return loader ? (
    <div>
      <Loader />
    </div>
  ) : (
    <Router>
      {/* <Toggle isOn={value} handleToggle={() => setValue(!value)} /> */}
      <Header data={data} />
      <Routes>
        <Route path="/" element={<Home repos={repos} />} />
      </Routes>
    </Router>
  );
};

export default Routing;
