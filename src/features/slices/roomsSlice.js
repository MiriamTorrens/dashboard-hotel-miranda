import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RoomsList } from "../../JSON/RoomsList";

const initialState = {
  roomsList: [],
  oneRoom: [],
};

export const getRooms = createAsyncThunk("rooms/getRooms", async () => {
  return new Promise((resolve) => setTimeout(resolve(RoomsList), 0));
});

export const roomsSlice = createSlice({
  name: "rooms",
  initialState,
  reducers: {
    getRoom: (state, action) => {
      const room = state.roomsList.filter((room) => room.id === action.payload);
      return (state.oneRoom = room);
    },
    updateRoom: (state, action) => {
      return state.map((room) =>
        room.id === action.payload.id ? action.payload : room
      );
    },
    deleteRoom: (state, action) => {
      return state.filter((room) => room.id !== action.payload.id);
    },
  },
  extraReducers(builder) {
    builder.addCase(getRooms.fulfilled, (state, action) => {
      return void (state.roomsList = action.payload);
    });
  },
});

export const allRooms = (state) => state.rooms.roomsList;
export const oneRoom = (state) => state.rooms.oneRoom;
export const { getRoom, updateRoom, deleteRoom } = roomsSlice.actions;
export default roomsSlice.reducer;
