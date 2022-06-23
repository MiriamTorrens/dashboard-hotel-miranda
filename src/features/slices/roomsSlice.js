import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { act } from 'react-test-renderer';
import { RoomsList } from '../../JSON/RoomsList';

const initialState= [];

export const getRooms = createAsyncThunk('rooms/getRooms', async () => {
    return new Promise(resolve => setTimeout(resolve(RoomsList), 0));
});


export const roomsSlice = createSlice({
    name: 'rooms',
      initialState,
      reducers: {
        createRoom: (state, action) => {
            const newRoom = {
                id: action.payload.id,
                images: action.payload.images,
                roomType: action.payload.roomType,
                roomNumber: action.payload.roomNumber,
                offer: action.payload.offer,
                price: action.payload.price,
                discount: action.payload.discount,
                cancellation: action.payload.cancellation,
                amenities: action.payload.amenities,
                status: action.payload.status,
                roomName: action.payload.roomName
            }
            state = state.unshift(newRoom);
        },
        getRoom: (state, action) => {
            return state.find(room => room.id === action.payload);
        },
        updateRoom: (state, action) => {
            return state.map(room => room.id === action.payload.id ? action.payload : room);
        },
        deleteRoom: (state, action) => {
            return state.filter(room => room.id !== action.payload.id);
        }
      },
      extraReducers(builder) {
          builder.addCase(getRooms.fulfilled, (state, action) => {
              return state = action.payload;
          })
      }
})

export const allRooms = state => state.rooms;
export const {createRoom, getRoom, updateRoom, deleteRoom } = roomsSlice.actions;
export default roomsSlice.reducer;
