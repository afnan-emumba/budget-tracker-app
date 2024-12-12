import { Modal, Button, Input, DatePicker } from "antd";
import { ExpenseData } from "../../pages/home/Home";
import styles from "./ModalDialog.module.css";
import { useState, useEffect } from "react";
import dayjs from "dayjs";

interface ModalDialogProps {
  modalType: "add" | "edit" | "delete" | null;
  visible: boolean;
  onClose: () => void;
  expense: ExpenseData | null;
  onAddExpense: (expense: ExpenseData) => void;
  onEditExpense: (expense: ExpenseData) => void;
  onDeleteExpense: (key: number) => void;
}

const ModalDialog = ({
  modalType,
  visible,
  onClose,
  expense,
  onAddExpense,
  onEditExpense,
  onDeleteExpense,
}: ModalDialogProps) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState(dayjs());

  useEffect(() => {
    if (modalType === "add") {
      setTitle("");
      setPrice("");
      setDate(dayjs());
    } else if (modalType === "edit" && expense) {
      setTitle(expense.expense);
      setPrice(expense.price);
      setDate(dayjs(expense.date));
    }
  }, [modalType, expense]);

  const handleAdd = () => {
    const newExpense: ExpenseData = {
      key: Date.now(),
      userId: expense?.userId || 0,
      expense: title,
      price,
      date: date.format("YYYY-MM-DD"),
    };
    onAddExpense(newExpense);
  };

  const handleEdit = () => {
    if (expense) {
      const updatedExpense: ExpenseData = {
        ...expense,
        expense: title,
        price,
        date: date.format("YYYY-MM-DD"),
      };
      onEditExpense(updatedExpense);
    }
  };

  const handleDelete = () => {
    if (expense) {
      onDeleteExpense(expense.key);
    }
  };

  const renderContent = () => {
    switch (modalType) {
      case "add":
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              padding: "1rem 0",
            }}
            className={styles.modalContent}
          >
            <div>
              <p style={{ color: "#2B2B2B", fontWeight: 500 }}>Title</p>
              <Input
                placeholder='Enter title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div style={{ display: "flex", gap: "1rem" }}>
              <div style={{ flex: 1 }}>
                <p style={{ color: "#2B2B2B", fontWeight: 500 }}>Price (PKR)</p>
                <Input
                  placeholder='Enter price'
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ color: "#2B2B2B", fontWeight: 500 }}>Date</p>
                <DatePicker
                  style={{ width: "100%" }}
                  value={date}
                  onChange={(date) => setDate(date || dayjs())}
                />
              </div>
            </div>
          </div>
        );
      case "edit":
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              padding: "1rem 0",
            }}
            className={styles.modalContent}
          >
            <div>
              <p style={{ color: "#2B2B2B", fontWeight: 500 }}>Title</p>
              <Input
                placeholder='Enter title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div style={{ display: "flex", gap: "1rem" }}>
              <div style={{ flex: 1 }}>
                <p style={{ color: "#2B2B2B", fontWeight: 500 }}>Price (PKR)</p>
                <Input
                  placeholder='Enter price'
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ color: "#2B2B2B", fontWeight: 500 }}>Date</p>
                <DatePicker
                  style={{ width: "100%" }}
                  value={date}
                  onChange={(date) => setDate(date || dayjs())}
                />
              </div>
            </div>
          </div>
        );
      case "delete":
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
              margin: "2rem 0",
            }}
          >
            <div
              style={{ display: "flex", flexDirection: "column", gap: "2px" }}
            >
              <p style={{ color: "#2B2B2B", fontWeight: 500 }}>Title</p>
              <p>{expense?.expense}</p>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div
                style={{ display: "flex", flexDirection: "column", gap: "2px" }}
              >
                <p style={{ color: "#2B2B2B", fontWeight: 500 }}>Price (PKR)</p>
                <p>{expense?.price}</p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "2px",
                  marginRight: "6rem",
                }}
              >
                <p style={{ color: "#2B2B2B", fontWeight: 500 }}>Date</p>
                <p>{expense?.date}</p>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Modal
      open={visible}
      title={
        modalType === "delete"
          ? "Delete Expense"
          : modalType === "edit"
          ? "Edit Expense"
          : "Add Expense"
      }
      onOk={
        modalType === "add"
          ? handleAdd
          : modalType === "edit"
          ? handleEdit
          : modalType === "delete"
          ? handleDelete
          : onClose
      }
      onCancel={onClose}
      footer={
        modalType === "delete" ? (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "1rem",
            }}
          >
            <Button
              block
              style={{ padding: "20px 0", borderRadius: "8px" }}
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              block
              danger
              type='primary'
              style={{ padding: "20px 0", borderRadius: "8px" }}
              onClick={handleDelete}
            >
              Delete
            </Button>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "1rem",
            }}
          >
            <Button
              block
              style={{ padding: "20px 0", borderRadius: "8px" }}
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              block
              type='primary'
              style={{ padding: "20px 0", borderRadius: "8px" }}
              onClick={modalType === "add" ? handleAdd : handleEdit}
            >
              {modalType === "add" ? "Add" : "Save"}
            </Button>
          </div>
        )
      }
    >
      {renderContent()}
    </Modal>
  );
};

export default ModalDialog;
