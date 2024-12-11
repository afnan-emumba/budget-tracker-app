import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import {
  Button,
  Divider,
  Table,
  Pagination,
  Progress,
  Select,
  Input,
  DatePicker,
} from "antd";
import { ColumnType } from "antd/es/table";
import {
  DeleteIcon,
  EditIcon,
  SearchIcon1,
  CalendarIcon,
} from "../../assets/icons";
import styles from "./Home.module.css";

interface ExpenseData {
  key: number;
  expense: string;
  totalExpenditure: number;
  price: string;
  date: string;
}

const { Option } = Select;

const data: ExpenseData[] = [];
for (let i = 1; i <= 20; i++) {
  data.push({
    key: i,
    expense: `Expense ${i}`,
    totalExpenditure: i * 1000,
    price: (i * 1000).toLocaleString(),
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

  const calculatePageSize = () => {
    const tableHeight = window.innerHeight - 500;
    const rowHeight = 54;
    const newPageSize = Math.floor(tableHeight / rowHeight);
    setPageSize(newPageSize + 1);
  };

  const onDelete = (key: number) => {
    alert("Delete " + key);
  };

  const tableColumns: ColumnType<ExpenseData>[] = [
    {
      title: "Expense",
      dataIndex: "expense",
      key: "expense",
      width: 200,
      ellipsis: true,
    },
    {
      title: "Total Expenditure",
      dataIndex: "totalExpenditure",
      key: "totalExpenditure",
      width: 250,
      render: (text: number) => (
        <Progress percent={Math.round((text / 100000) * 100)} />
      ),
    },
    {
      title: "Price (PKR)",
      dataIndex: "price",
      key: "price",
      align: "right",
      width: 100,
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      width: 100,
    },
    {
      title: "Actions",
      key: "actions",
      align: "center",
      width: 150,
      render: (record) => (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "4px",
          }}
        >
          <Button
            type='text'
            icon={<DeleteIcon />}
            onClick={() => onDelete(record.key)}
          />
          <Button type='text' icon={<EditIcon />} />
        </div>
      ),
    },
  ];

  useEffect(() => {
    calculatePageSize();
    window.addEventListener("resize", calculatePageSize);

    return () => {
      window.removeEventListener("resize", calculatePageSize);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>My Expenses | Budget Tracker</title>
      </Helmet>

      <div className={styles.homeContent}>
        <div className={styles.header}>
          <h2>Expenses</h2>
          <Button type='primary'>Add Expenses</Button>
        </div>

        <Divider />

        <div className={styles.expenseTable}>
          <Table
            columns={tableColumns}
            dataSource={paginatedData}
            pagination={false}
            title={() => (
              <div className={styles.tableControls}>
                <h3>Expenses</h3>
                <div className={styles.tableFilters}>
                  <div className={styles.tableSelect}>
                    <label>Sort by</label>
                    <Select defaultValue='All' style={{ width: 130 }}>
                      <Option value='date'>Date</Option>
                      <Option value='price'>Price</Option>
                    </Select>
                  </div>

                  <div className={styles.tableSelect}>
                    <label>By Date</label>
                    <DatePicker
                      style={{ width: 130 }}
                      suffixIcon={<CalendarIcon />}
                    />
                  </div>
                  <Input
                    prefix={<SearchIcon1 />}
                    placeholder='Search'
                    style={{
                      width: 250,
                      borderColor: "#E1E8F2",
                      borderRadius: "4px",
                    }}
                    className={styles.tableInput}
                  />
                </div>
              </div>
            )}
          />
          <div className={styles.tableFooter}>
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
    </>
  );
};

export default Home;
