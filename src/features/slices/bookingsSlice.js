import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchData } from "../../env";

const initialState = {
  bookingsList: [],
};

export const getBookings = createAsyncThunk(
  "bookings/getBookings",
  async () => {
    const response = await fetchData("bookings", "GET");
    return response;
  }
);

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
    getBooking: (state, action) => {
      return state.find((booking) => booking.id === action.payload);
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
    builder.addCase(getBookings.fulfilled, (state, action) => {
      return void (state.bookingsList = action.payload);
    });
  },
});

export const allBookings = (state) => state.bookings.bookingsList;
export const { createBooking, getBooking, updateBooking, deleteBooking } =
  bookingsSlice.actions;
export default bookingsSlice.reducer;
