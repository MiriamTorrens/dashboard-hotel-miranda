import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { requestApi, requestApiBody } from "../../api";

const initialState = {
  bookingsList: [],
  oneBooking: [],
};

export const getBookings = createAsyncThunk(
  "bookings/getBookings",
  async () => {
    const response = await requestApi("bookings", "GET");
    return response;
  }
);

export const getBooking = createAsyncThunk(
  "bookings/getBooking",
  async (id) => {
    const response = await requestApi(`bookings/${id}`, "GET");
    return response;
  }
);

export const updateBooking = createAsyncThunk(
  "bookings/updateBooking",
  async (id, data) => {
    const response = await requestApiBody(`bookings/${id}`, "PATCH", data);
    return response;
  }
);

export const deleteBooking = createAsyncThunk(
  "bookings/deleteBooking",
  async (id) => {
    const response = await requestApi(`bookings/${id}`, "DELETE");
    return response;
  }
);

export const createBooking = createAsyncThunk(
  "bookings/createBookings",
  async (data) => {
    const response = await requestApiBody("bookings", "POST", data);
    return response;
  }
);

export const bookingsSlice = createSlice({
  name: "bookings",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(getBookings.fulfilled, (state, action) => {
        return void (state.bookingsList = action.payload);
      })
      .addCase(getBooking.fulfilled, (state, action) => {
        return void (state.oneBooking = action.payload);
      });
  },
});

export const allBookings = (state) => state.bookings.bookingsList;
export const oneBooking = (state) => state.bookings.oneBooking;
export default bookingsSlice.reducer;
