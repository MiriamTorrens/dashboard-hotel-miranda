import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchData } from "../../api";

const initialState = {
  usersList: [],
  filteredUsers: [],
  oneUser: [],
};

export const getUsers = createAsyncThunk("users/getUsers", async () => {
  const response = await fetchData("users", "GET");
  return response;
});

export const getUser = createAsyncThunk("users/getUser", async (id) => {
  const response = await fetchData(`users/${id}`, "GET");
  return response;
});

export const updateUser = createAsyncThunk("users/updateUser", async (id) => {
  const response = await fetchData(`users/${id}`, "PATCH");
  return response;
});

export const createUser = createAsyncThunk("users/createUser", async () => {
  const response = await fetchData("users", "POST");
  return response;
});

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    findUser: (state, action) => {
      console.log("dentro");
      const user = state.usersList.find(
        (user) => user.user_name === action.payload
      );
      return user;
    },
    sortUser: (state, action) => {
      if (action.payload === "newest") {
        console.log(action.payload);
        state.usersList.sort((a, b) => a.star_date - b.start_date);
      } else {
        console.log(action.payload);
        state.usersList.sort((a, b) => a.user_name - b.user_name);
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getUsers.fulfilled, (state, action) => {
        return void (state.usersList = action.payload);
      })
      .addCase(getUser.fulfilled, (state, action) => {
        return void (state.oneUser = action.payload);
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        return void (state.oneUser = action.payload);
      })
      .addCase(createUser.fulfilled, (state, action) => {
        return void (state.usersList = action.payload);
      });
  },
});

export const { findUser, sortUser } = usersSlice.actions;
export const allUsers = (state) => state.users.usersList;
export const filteredUsers = (state) => state.users.filteredUsers;
export const oneUser = (state) => state.users.oneUser;
export default usersSlice.reducer;
