import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchData } from "../../api";

const initialState = {
  contactList: [],
};

export const getContact = createAsyncThunk("contact/getContact", async () => {
  const response = await fetchData("contact", "GET");
  return response;
});

export const getContactMessage = createAsyncThunk(
  "contact/getContactMessage",
  async (id) => {
    const response = await fetchData(`contact/${id}`, "GET");
    return response;
  }
);

export const updateContact = createAsyncThunk(
  "contact/updateContact",
  async (id) => {
    const response = await fetchData(`contact/${id}`, "PATCH");
    return response;
  }
);

export const deleteContact = createAsyncThunk(
  "contact/deleteContact",
  async (id) => {
    const response = await fetchData(`contact/${id}`, "DELETE");
    return response;
  }
);

export const createContact = createAsyncThunk(
  "contact/createContact",
  async () => {
    const response = await fetchData("contact", "POST");
    return response;
  }
);

export const contactSlice = createSlice({
  name: "contact",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(getContact.fulfilled, (state, action) => {
        return void (state.contactList = action.payload);
      })
      .addCase(getContactMessage.fulfilled, (state, action) => {
        return void (state.contactList = action.payload);
      })
      .addCase(updateContact.fulfilled, (state, action) => {
        return void (state.contactList = action.payload);
      })
      .addCase(createContact.fulfilled, (state, action) => {
        return void (state.contactList = action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        return void (state.contactList = action.payload);
      });
  },
});

export const allContact = (state) => state.contact.contactList;
export default contactSlice.reducer;
