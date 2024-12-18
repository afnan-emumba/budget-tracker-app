import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, UsersState } from "../../utils/interfaces";

const initialState: UsersState = {
  users: [
    {
      userId: 1,
      firstName: "John",
      middleName: "A.",
      lastName: "Doe",
      aboutMe: "Demo user for testing",
      gender: "male",
      email: "john@example.com",
      password: "12345678",
      website: "https://johndoe.com",
      phoneNumber: "03001234567",
      education: "Bachelor's Degree in Computer Science",
      streetAddress: "123 Main St",
      city: "Anytown",
      state: "Anystate",
      zipCode: "12345",
      dateOfBirth: "1990-01-01",
      budgetLimit: 50000,
      profilePicture: "",
      isLoggedIn: false,
    },
  ],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload);
    },
    updateUser: (
      state,
      action: PayloadAction<Partial<User> & { userId: number }>
    ) => {
      if (action.payload.userId === 0) {
        state.users.forEach((user) => {
          user.isLoggedIn = false;
        });
      } else {
        const index = state.users.findIndex(
          (user) => user.userId === action.payload.userId
        );
        if (index !== -1) {
          state.users[index] = { ...state.users[index], ...action.payload };
        }
      }
    },
  },
});

export const { setUser, updateUser } = userSlice.actions;
export default userSlice.reducer;
