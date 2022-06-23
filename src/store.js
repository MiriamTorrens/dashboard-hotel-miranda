import { configureStore } from '@reduxjs/toolkit';
import bookingsReducer from './features/slices/bookingsSlice';
import roomsReducer from './features/slices/roomsSlice';
import usersReducer from './features/slices/usersSlice';
import contactReducer from './features/slices/contactSlice';

export const store = configureStore({
  reducer: {
    bookings: bookingsReducer,
    rooms: roomsReducer,
    users: usersReducer,
    contact: contactReducer
  },
  middleware: getDefaultMiddleware =>  getDefaultMiddleware({    serializableCheck: false,  })
});
