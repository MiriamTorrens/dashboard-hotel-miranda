import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UsersList } from "../../JSON/UsersList";

const initialState = {
  usersList: [],
  oneUser: [],
};

export const getUsers = createAsyncThunk("users/getUsers", async () => {
  return new Promise((resolve) => setTimeout(resolve(UsersList), 0));
});

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    createUser: (state, action) => {
      return void state.usersList.unshift(action.payload);
    },
    getUser: (state, action) => {
      return state.find((user) => user.id === action.payload);
    },
    updateUser: (state, action) => {
      return state.map((user) =>
        user.id === action.payload.id ? action.payload : user
      );
    },
    deleteUser: (state, action) => {
      return state.filter((user) => user.id !== action.payload.id);
    },
  },
  extraReducers(builder) {
    builder.addCase(getUsers.fulfilled, (state, action) => {
      return void (state.usersList = action.payload);
    });
  },
});

export const { createUser, getUser, updateUser, deleteUser } =
  usersSlice.actions;
export const allUsers = (state) => state.users.usersList;
export const oneUser = (state) => state.users.oneUser;
export default usersSlice.reducer;
