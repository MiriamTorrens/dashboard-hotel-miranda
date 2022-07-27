import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchData } from "../../env";

const initialState = {
  usersList: [],
};

export const getUsers = createAsyncThunk("users/getUsers", async () => {
  const response = await fetchData("users", "GET");
  return response;
});

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    createUser: (state, action) => {
      const newUser = {
        fullName: action.payload.fullName,
        id: action.payload.id,
        email: action.payload.email,
        startDate: action.payload.startDate,
        occupation: action.payload.occupation,
        description: action.payload.description,
        contact: action.payload.contact,
        status: action.payload.status,
        photo: action.payload.photo,
        password: action.payload.password,
      };
      state = state.unshift(newUser);
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
export default usersSlice.reducer;
