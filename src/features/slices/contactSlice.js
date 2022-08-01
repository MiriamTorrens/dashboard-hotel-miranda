import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ContactList } from "../../JSON/ContactList";

const initialState = {
  contactList: [],
  oneContact: [],
};

export const getContact = createAsyncThunk("contact/getContact", async () => {
  return new Promise((resolve) => setTimeout(resolve(ContactList), 0));
});

export const getOneContact = createAsyncThunk(
  "contact/getOneContact",
  async (id) => {
    return new Promise((resolve) =>
      setTimeout(resolve(ContactList.filter((contact) => contact.id === id)), 0)
    );
  }
);

export const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    createContact: (state, action) => {
      const f = new Date();
      const newContact = {
        id: action.payload.id,
        date: f.getFullYear() + "-" + (f.getMonth() + 1) + "-" + f.getDate(),
        customer: {
          fullName: action.payload.customer.fullName,
          email: action.payload.customer.email,
          phoneNumber: action.payload.customer.phoneNumber,
        },
        subject: action.payload.subject,
        comment: action.payload.comment,
        viewed: action.payload.status,
        archived: action.payload.archived,
      };
      state = state.unshift(newContact);
    },
    updateContact: (state, action) => {
      const index = state.contactList.findIndex(
        (contact) => contact.id === action.payload.id
      );
      return void (state.contactList[index] = action.payload);
    },
    deleteContact: (state, action) => {
      return state.filter((contact) => contact.id !== action.payload.id);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getContact.fulfilled, (state, action) => {
        return void (state.contactList = action.payload);
      })
      .addCase(getOneContact.fulfilled, (state, action) => {
        return void (state.oneContact = action.payload);
      });
  },
});

export const allContact = (state) => state.contact.contactList;
export const oneContact = (state) => state.contact.oneContact;
export const { createContact, updateContact, deleteContact } =
  contactSlice.actions;
export default contactSlice.reducer;
