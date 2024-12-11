import { Helmet } from "react-helmet";
import { Divider, Table, Select } from "antd";
import LinePLot from "../../components/linePlot/LinePlot";
import styles from "./Analysis.module.css";

const { Option } = Select;

const Analysis = () => {
  return (
    <>
      <Helmet>
        <title>Analysis | Budget Tracker</title>
      </Helmet>

      <div className={styles.analysisContent}>
        <div className={styles.header}>
          <h2>Analysis</h2>
        </div>

        <Divider />

        <div className={styles.analysisGraph}>
          <Table
            showHeader={false}
            bordered={false}
            pagination={false}
            title={() => (
              <div className={styles.tableControls}>
                <h3>Expenses</h3>

                <div className={styles.tableSelect}>
                  <label>Range</label>
                  <Select defaultValue='' style={{ width: 160 }}>
                    <Option value='1'>Last Month</Option>
                    <Option value='6'>Last 6 Months</Option>
                    <Option value='12'>Last 12 Months</Option>
                  </Select>
                </div>
              </div>
            )}
            dataSource={[{ key: "1", plot: <LinePLot /> }]}
            columns={[{ dataIndex: "plot", key: "plot" }]}
          />
          <div className={styles.graphFooter}></div>
        </div>
      </div>
    </>
  );
};

export default Analysis;
