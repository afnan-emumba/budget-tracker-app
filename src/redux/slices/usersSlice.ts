import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  userId: number;
  firstName: string;
  middleName: string;
  lastName: string;
  bio: string;
  gender: string;
  email: string;
  password: string;
  website: string;
  education: string;
  streetAddress: string;
  city: string;
  state: string;
  zipCode: string;
  dateOfBirth: string;
  budgetLimit: number;
  isLoggedIn: boolean;
}

interface UsersState {
  users: User[];
}

const initialState: UsersState = {
  users: [],
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