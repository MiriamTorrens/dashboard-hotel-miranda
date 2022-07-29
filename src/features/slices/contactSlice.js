import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { requestApi, requestApiBody } from "../../api";

const initialState = {
  contactList: [],
  oneContact: [],
};

export const getContact = createAsyncThunk("contact/getContact", async () => {
  const response = await requestApi("contact", "GET");
  return response;
});

export const getContactMessage = createAsyncThunk(
  "contact/getContactMessage",
  async (id) => {
    const response = await requestApi(`contact/${id}`, "GET");
    return response;
  }
);

export const updateContact = createAsyncThunk(
  "contact/updateContact",
  async (id, data) => {
    const response = await requestApiBody(`contact/${id}`, "PATCH", data);
    return response;
  }
);

export const deleteContact = createAsyncThunk(
  "contact/deleteContact",
  async (id) => {
    const response = await requestApi(`contact/${id}`, "DELETE");
    return response;
  }
);

export const createContact = createAsyncThunk(
  "contact/createContact",
  async (data) => {
    const response = await requestApiBody("contact", "POST", data);
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
        return void (state.oneContact = action.payload);
      });
  },
});

export const allContact = (state) => state.contact.contactList;
export const oneContact = (state) => state.contact.oneContact;
export default contactSlice.reducer;
