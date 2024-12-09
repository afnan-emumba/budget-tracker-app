import { Helmet } from "react-helmet";
import "./Home.css";

const Home = () => {
  return (
    <div className='home-page'>
      <Helmet>
        <title>My Expenses | Budget Tracker</title>
      </Helmet>
      Home
    </div>
  );
};

export default Home;
