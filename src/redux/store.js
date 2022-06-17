import { configureStore } from '@reduxjs/toolkit';
import bookingsReducer from './slices/bookingsSlice';
import roomsReducer from './slices/roomsSlice';
import usersReducer from './slices/usersSlice';
import contactReducer from './slices/contactSlice';

export const store = configureStore({
  reducer: {
    bookings: bookingsReducer,
    rooms: roomsReducer,
    users: usersReducer,
    contact: contactReducer
  },
  middleware: getDefaultMiddleware =>  getDefaultMiddleware({    serializableCheck: false,  })
});
