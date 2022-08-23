import Cards from 'components/cards/Cards';

const Home = (props) => {
  const repositories = props.repos;
  return (
    <main>
      <Cards repositories={repositories} />
    </main>
  );
};

export default Home;
