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
      const f = new Date();
      const newBooking = {
        fullName: action.payload.fullName,
        id: action.payload.id,
        date: f.getFullYear() + "-" + (f.getMonth() + 1) + "-" + f.getDate(),
        checkin: action.payload.checkin,
        checkout: action.payload.checkout,
        roomInfo: action.payload.roomInfo,
        price: action.payload.price,
        specialRequest: action.payload.specialRequest,
        amenities: action.payload.amenities,
        images: action.payload.images,
        roomType: action.payload.roomType,
        roomDescription: action.payload.roomDescription,
        status: action.payload.status,
      };
      state = state.unshift(newBooking);
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
