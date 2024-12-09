import { Helmet } from "react-helmet";
import "./Home.css";

const Home = () => {
  return (
    <div className='home-page'>
      <Helmet>
        <title>My Expenses | Budget Tracker</title>
      </Helmet>

      <div className='home-content'>
        <h1>Hello</h1>
        <p>Afnan Sohail</p>
      </div>
    </div>
  );
};

export default Home;
