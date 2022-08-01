import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BookingsList } from "../../JSON/BookingsList";

export const getBookings = createAsyncThunk(
  "bookings/getBookings",
  async () => {
    return new Promise((resolve) => setTimeout(resolve(BookingsList), 0));
  }
);

export const getBooking = createAsyncThunk(
  "bookings/getBooking",
  async (id) => {
    return new Promise((resolve) =>
      setTimeout(
        resolve(BookingsList.filter((contact) => contact.id === id)),
        0
      )
    );
  }
);

const initialState = {
  bookingsList: [],
  oneBooking: [],
};

export const bookingsSlice = createSlice({
  name: "bookings",
  initialState,
  reducers: {
    createBooking: (state, action) => {
      return void state.bookingsList.unshift(action.payload);
    },
    updateBooking: (state, action) => {
      return state.map((booking) =>
        booking.id === action.payload.id ? action.payload : booking
      );
    },
    deleteBooking: (state, action) => {
      return state.filter((booking) => booking.id !== action.payload.id);
    },
  },
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
export const { createBooking, updateBooking, deleteBooking } =
  bookingsSlice.actions;
export default bookingsSlice.reducer;
