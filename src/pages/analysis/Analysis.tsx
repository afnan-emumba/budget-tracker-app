import { Helmet } from "react-helmet";
import { Divider, Table, Select } from "antd";

import "./Analysis.css";

const { Option } = Select;

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
          <Table
            showHeader={false}
            title={() => (
              <div className='table-controls'>
                <h3>Expenses</h3>

                <div className='table-select'>
                  <label>Sort by</label>
                  <Select defaultValue='' style={{ width: 160 }}>
                    <Option value='1'>Last Month</Option>
                    <Option value='6'>Last 6 Months</Option>
                    <Option value='12'>Last 12 Months</Option>
                  </Select>
                </div>
              </div>
            )}
          />
        </div>
      </div>
    </>
  );
};

export default Analysis;
