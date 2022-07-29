import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { requestApi, requestApiBody } from "../../api";

const initialState = {
  usersList: [],
  oneUser: [],
};

export const getUsers = createAsyncThunk("users/getUsers", async () => {
  const response = await requestApi("users");
  return response;
});

export const getUser = createAsyncThunk("users/getUser", async (id) => {
  const response = await requestApi(`users/${id}`);
  return response;
});

export const updateUser = createAsyncThunk(
  "users/updateUser",
  async (id, data) => {
    const response = await requestApiBody(`users/${id}`, "PATCH", data);
    return response;
  }
);

export const deleteUser = createAsyncThunk("users/deleteUser", async (id) => {
  const response = await requestApi(`users/${id}`, "DELETE");
  return response;
});

export const createUser = createAsyncThunk("users/createUser", async (data) => {
  const response = await requestApiBody("users", "POST", data);
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
      });
  },
});

export const allUsers = (state) => state.users.usersList;
export const oneUser = (state) => state.users.oneUser;
export default usersSlice.reducer;
