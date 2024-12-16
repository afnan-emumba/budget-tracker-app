import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Helmet } from "react-helmet";
import dayjs from "dayjs";
import {
  Button,
  Divider,
  Table,
  Pagination,
  Progress,
  Select,
  Input,
  DatePicker,
  Alert,
} from "antd";
import { ColumnType } from "antd/es/table";
import {
  DeleteIcon,
  EditIcon,
  SearchIcon1,
  CalendarIcon,
} from "../../assets/icons";
import styles from "./Home.module.css";
import ModalDialog from "../../components/modal/ModalDialog";
import { RootState } from "../../redux/store";
import {
  addExpense,
  deleteExpense,
  updateExpense,
} from "../../redux/slices/expensesSlice";
import { Expense } from "../../utils/interfaces";

const { Option } = Select;

const Home = () => {
  const [pageSize, setPageSize] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [modalType, setModalType] = useState<"add" | "edit" | "delete" | null>(
    null
  );
  const [selectedExpense, setSelectedExpense] = useState<Expense | null>(null);
  const [sortOrder, setSortOrder] = useState<"ascend" | "descend" | null>(null);
  const [sortField, setSortField] = useState<keyof Expense | null>(null);
  const [filterDate, setFilterDate] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState<"success" | "error">("success");

  const users = useSelector((state: RootState) => state.user.users);
  const expenses = useSelector((state: RootState) => state.expenses.expenses);
  const loggedInUser = users.find((user) => user.isLoggedIn);
  const dispatch = useDispatch();

  const userExpenses = expenses.filter(
    (expense) => expense.userId === loggedInUser?.userId
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleSortChange = (value: string) => {
    switch (value) {
      case "price-h2l":
        setSortField("price");
        setSortOrder("descend");
        break;
      case "price-l2h":
        setSortField("price");
        setSortOrder("ascend");
        break;
      case "date-n2o":
        setSortField("date");
        setSortOrder("descend");
        break;
      case "date-o2n":
        setSortField("date");
        setSortOrder("ascend");
        break;
      default:
        setSortField(null);
        setSortOrder(null);
    }
  };

  const handleDateChange = (dateString: string) => {
    setFilterDate(dateString);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredExpenses = userExpenses
    .filter(
      (expense) => !filterDate || dayjs(expense.date).isSame(filterDate, "day")
    )
    .filter((expense) =>
      expense.expense.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const sortedExpenses = [...filteredExpenses].sort((a, b) => {
    if (!sortField || !sortOrder) return 0;
    const aValue =
      sortField === "price" ? parseFloat(a[sortField]) : a[sortField];
    const bValue =
      sortField === "price" ? parseFloat(b[sortField]) : b[sortField];
    if (aValue < bValue) return sortOrder === "ascend" ? -1 : 1;
    if (aValue > bValue) return sortOrder === "ascend" ? 1 : -1;
    return 0;
  });

  const paginatedData = sortedExpenses.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const calculatePageSize = () => {
    const tableHeight = window.innerHeight - 500;
    const rowHeight = 54;
    const newPageSize = Math.floor(tableHeight / rowHeight);
    setPageSize(newPageSize + 1);
  };

  const onAdd = () => {
    setSelectedExpense(null);
    setModalType("add");
  };

  const onDelete = (key: number) => {
    const expense = userExpenses.find((item) => item.key === key);
    setSelectedExpense(expense || null);
    setModalType("delete");
  };

  const onEdit = (key: number) => {
    const expense = userExpenses.find((item) => item.key === key);
    setSelectedExpense(expense || null);
    setModalType("edit");
  };

  const handleAddExpense = (expense: Expense) => {
    if (loggedInUser) {
      const newExpense = { ...expense, userId: loggedInUser.userId };
      dispatch(addExpense(newExpense));
      setModalType(null);
      setAlertMessage("Expense Added Successfully!");
      setAlertType("success");
      setAlertVisible(true);
    }
  };

  const handleEditExpense = (expense: Expense) => {
    dispatch(updateExpense(expense));
    setModalType(null);
    setAlertMessage("Expense Updated Successfully!");
    setAlertType("success");
    setAlertVisible(true);
  };

  const handleDeleteExpense = (key: number) => {
    dispatch(deleteExpense(key));
    setModalType(null);
    setAlertMessage("Expense Deleted Successfully!");
    setAlertType("error");
    setAlertVisible(true);

    const totalRecordsAfterDeletion = userExpenses.length - 1;
    const totalPagesAfterDeletion = Math.ceil(
      totalRecordsAfterDeletion / pageSize
    );
    if (currentPage > totalPagesAfterDeletion) {
      setCurrentPage(totalPagesAfterDeletion);
    }
  };

  const tableColumns: ColumnType<Expense>[] = [
    {
      title: "Expense",
      dataIndex: "expense",
      key: "expense",
      width: 200,
      ellipsis: true,
    },
    {
      title: "Total Expenditure",
      dataIndex: "price",
      key: "totalExpenditure",
      width: 150,
      render: (text: string) => (
        <Progress
          percent={Math.round(
            (parseFloat(text) / (loggedInUser?.budgetLimit || 1)) * 100
          )}
        />
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
      render: (text: string) => dayjs(text).format("YYYY-MM-DD"),
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
          <Button
            type='text'
            icon={<EditIcon />}
            onClick={() => onEdit(record.key)}
          />
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
          <Button type='primary' onClick={onAdd}>
            Add Expenses
          </Button>
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
                    <Select
                      defaultValue='All'
                      style={{ width: 210 }}
                      onChange={handleSortChange}
                    >
                      <Option value='price-h2l'>
                        Price: Highest to lowest
                      </Option>
                      <Option value='price-l2h'>
                        Price: Lowest to highest
                      </Option>
                      <Option value='date-n2o'>Date: Newest to oldest</Option>
                      <Option value='date-o2n'>Date: Oldest to newest</Option>
                    </Select>
                  </div>
                  <div className={styles.tableSelect}>
                    <label>By Date</label>
                    <DatePicker
                      style={{ width: 210 }}
                      suffixIcon={<CalendarIcon />}
                      onChange={handleDateChange}
                    />
                  </div>
                  <Input
                    prefix={<SearchIcon1 />}
                    placeholder='Search'
                    value={searchTerm}
                    onChange={handleSearchChange}
                    style={{
                      width: 270,
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
              Showing {paginatedData.length} / {userExpenses.length} items
            </p>
            <Pagination
              current={currentPage}
              pageSize={pageSize}
              total={userExpenses.length}
              onChange={handlePageChange}
            />
          </div>
        </div>

        {alertVisible && (
          <Alert
            message='Success!'
            description={alertMessage}
            type={alertType}
            showIcon
            closable
            onClose={() => setAlertVisible(false)}
            className={styles.alert}
          />
        )}

        <div className='modals'>
          <ModalDialog
            modalType={modalType}
            visible={!!modalType}
            onClose={() => setModalType(null)}
            expense={selectedExpense}
            onAddExpense={handleAddExpense}
            onEditExpense={handleEditExpense}
            onDeleteExpense={handleDeleteExpense}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
