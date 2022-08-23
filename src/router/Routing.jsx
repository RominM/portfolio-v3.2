// React
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Models
import { GITHUB_URL } from 'models/url';
import { getData } from 'models/getData';
// Views
import Header from 'components/header/Header';
import Home from 'views/Pages/Home/Home';
import Loader from 'components/loader/Loader';
// Controllers
import { loading } from 'controllers/loading';

const Routing = () => {
  const [loader, setLoader] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    loading(setLoader);
    const fetchData = async () => {
      setData(await getData(GITHUB_URL));
    };
    fetchData();
  }, []);

  return loader ? (
    <div>
      <Loader />
    </div>
  ) : (
    <Router>
      <Header data={data} />
      <Routes>
        <Route path="/" element={<Home data={data} />} />
      </Routes>
    </Router>
  );
};

export default Routing;
