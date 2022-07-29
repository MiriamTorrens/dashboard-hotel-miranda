import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { requestApi, requestApiBody } from "../../api";

const initialState = {
  roomsList: [],
  oneRoom: [],
};

export const getRooms = createAsyncThunk("rooms/getRooms", async () => {
  const response = await requestApi("rooms", "GET");
  return response;
});

export const getRoom = createAsyncThunk("rooms/getRoom", async (id) => {
  const response = await requestApi(`rooms/${id}`, "GET");
  return response;
});

export const updateRoom = createAsyncThunk(
  "rooms/updateRoom",
  async (id, data) => {
    const response = await requestApiBody(`rooms/${id}`, "PATCH", data);
    return response;
  }
);

export const deleteRoom = createAsyncThunk("rooms/deleteRoom", async (id) => {
  const response = await requestApi(`rooms/${id}`, "DELETE");
  return response;
});

export const createRoom = createAsyncThunk(
  "rooms/createRooms",
  async (data) => {
    const response = await requestApiBody("rooms", "POST", data);
    return response;
  }
);

export const roomsSlice = createSlice({
  name: "rooms",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(getRooms.fulfilled, (state, action) => {
        return void (state.roomsList = action.payload);
      })
      .addCase(getRoom.fulfilled, (state, action) => {
        return void (state.oneRoom = action.payload);
      });
  },
});

export const allRooms = (state) => state.rooms.roomsList;
export const oneRoom = (state) => state.rooms.oneRoom;
export default roomsSlice.reducer;
