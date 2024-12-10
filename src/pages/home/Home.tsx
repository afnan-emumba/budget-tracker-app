import { Helmet } from "react-helmet";
import { Button, Divider, Table, Input, Select, Pagination } from "antd";
import { useEffect, useState } from "react";
import "./Home.css";

const { Option } = Select;

const columns = [
  {
    title: "Expense",
    dataIndex: "expense",
    key: "expense",
  },
  {
    title: "Total Expenditure",
    dataIndex: "totalExpenditure",
    key: "totalExpenditure",
  },
  {
    title: "Price (PKR)",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Actions",
    key: "actions",
    render: () => <Button type='link'>Edit</Button>,
  },
];

interface ExpenseData {
  key: string;
  expense: string;
  totalExpenditure: string;
  price: string;
  date: string;
}

const data: ExpenseData[] = [];
for (let i = 1; i <= 20; i++) {
  data.push({
    key: i.toString(),
    expense: `Expense ${i}`,
    totalExpenditure: (i * 1000).toString(),
    price: (i * 1000).toString(),
    date: `2024-12-${i.toString().padStart(2, "0")}`,
  });
}

const Home = () => {
  const [pageSize, setPageSize] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const paginatedData = data.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  useEffect(() => {
    const calculatePageSize = () => {
      const tableHeight = window.innerHeight - 500;
      const rowHeight = 54;
      const newPageSize = Math.floor(tableHeight / rowHeight);
      setPageSize(newPageSize + 1);
    };

    calculatePageSize();
    window.addEventListener("resize", calculatePageSize);

    return () => {
      window.removeEventListener("resize", calculatePageSize);
    };
  }, []);

  return (
    <div className='home-page'>
      <Helmet>
        <title>My Expenses | Budget Tracker</title>
      </Helmet>

      <div className='home-content'>
        <div className='header'>
          <h2>Expenses</h2>
          <Button type='primary'>Add Expenses</Button>
        </div>

        <Divider />

        <div className='expense-table'>
          <Table
            columns={columns}
            dataSource={paginatedData}
            pagination={false}
            title={() => (
              <div className='table-controls'>
                <h3>Expenses</h3>
                <div className='table-filters'>
                  <Select defaultValue='Sort by' style={{ width: 120 }}>
                    <Option value='date'>Date</Option>
                    <Option value='price'>Price</Option>
                  </Select>
                  <Select defaultValue='By Date' style={{ width: 120 }}>
                    <Option value='today'>Today</Option>
                    <Option value='week'>This Week</Option>
                    <Option value='month'>This Month</Option>
                  </Select>
                  <Input.Search
                    placeholder='Search expenses'
                    style={{ width: 200 }}
                  />
                </div>
              </div>
            )}
          />
          <div className='table-footer'>
            <p>
              Showing {paginatedData.length} / {data.length} items
            </p>
            <Pagination
              current={currentPage}
              pageSize={pageSize}
              total={data.length}
              onChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
