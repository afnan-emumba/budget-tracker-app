import { Helmet } from "react-helmet";
import { Divider } from "antd";

import "./Analysis.css";

const Analysis = () => {
  return (
    <>
      <Helmet>
        <title>Analysis | Budget Tracker</title>
      </Helmet>

      <div className='analysis-content'>
        <div className='header'>
          <h2>Analysis</h2>
        </div>

        <Divider />

        <div className='analysis-graph'>
          <h3>Graph</h3>
        </div>
      </div>
    </>
  );
};

export default Analysis;
