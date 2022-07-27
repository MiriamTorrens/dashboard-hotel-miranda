import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchData } from "../../api";

const initialState = {
  usersList: [],
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

export const deleteUser = createAsyncThunk("users/deleteUser", async (id) => {
  const response = await fetchData(`users/${id}`, "DELETE");
  return response;
});

export const createUser = createAsyncThunk("users/createUser", async () => {
  const response = await fetchData("users", "POST");
  return response;
});

export const usersSlice = createSlice({
  name: "users",
  initialState,
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
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        return void (state.usersList = action.payload);
      });
  },
});

export const allUsers = (state) => state.users.usersList;
export default usersSlice.reducer;
