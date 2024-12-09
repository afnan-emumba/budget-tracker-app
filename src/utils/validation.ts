import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .matches(
      /^[a-zA-Z\s-]+$/,
      "First name can only contain alphabets, spaces, and hyphens"
    )
    .max(50, "First name must be at most 50 characters")
    .required("First name is required"),
  lastName: Yup.string()
    .matches(
      /^[a-zA-Z\s-]+$/,
      "Last name can only contain alphabets, spaces, and hyphens"
    )
    .max(50, "Last name must be at most 50 characters")
    .required("Last name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(
      /[a-zA-Z0-9!@#$%^&*(),.?":{}|<>]/,
      "Password must contain at least one alphabet, number, or special character"
    )
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), undefined], "Passwords must match")
    .required("Confirm password is required"),
  budget: Yup.number()
    .min(1, "Budget must be at least 1")
    .max(99999999, "Budget must be at most 99999999")
    .required("Budget is required"),
});

export const expenseValidationSchema = Yup.object().shape({
  expense: Yup.string()
    .matches(
      /^[a-zA-Z\s-0-9]+$/,
      "Expense can only contain alphabets, spaces, hyphens, and numbers"
    )
    .max(30, "Expense must be at most 30 characters")
    .required("Expense is required"),
  price: Yup.number().required("Price is required"),
  date: Yup.string().required("Date is required"),
});
