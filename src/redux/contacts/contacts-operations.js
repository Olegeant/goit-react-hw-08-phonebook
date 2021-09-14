import { createAsyncThunk, createAction } from '@reduxjs/toolkit';
import * as JSONServerAPI from '../../services/jsonserver-api';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await JSONServerAPI.fetchContacts();
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      const response = await JSONServerAPI.addContact(contact);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, { rejectWithValue }) => {
    try {
      const response = await JSONServerAPI.deleteContact(contactId);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const setFilter = createAction('contacts/setFilter', filter => ({
  payload: filter.toLowerCase(),
}));
