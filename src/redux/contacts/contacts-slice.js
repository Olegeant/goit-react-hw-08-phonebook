import { createSlice } from '@reduxjs/toolkit';
import { contactsOperations } from './';

const initialState = {
  items: [],
  filter: '',
  isLoading: false,
  error: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setFilter(state, { payload }) {
      state.filter = payload;
    },
  },
  extraReducers: {
    [contactsOperations.fetchContacts.fulfilled]: (state, { payload }) => {
      state.items = payload;
      state.isLoading = false;
    },
    [contactsOperations.addContact.fulfilled]: (state, { payload }) => {
      state.items = [...state.items, payload];
      state.isLoading = false;
    },
    [contactsOperations.deleteContact.fulfilled]: (state, { payload }) => {
      state.items = state.items.filter(({ id }) => id !== payload);
      state.isLoading = false;
    },

    // [contactsOperations.setFilter]: (state, { payload }) => {
    //   state.filter = payload;
    // },

    [contactsOperations.fetchContacts.pending]: state => {
      state.isLoading = true;
      state.error = '';
    },
    [contactsOperations.addContact.pending]: state => {
      state.isLoading = true;
      state.error = '';
    },
    [contactsOperations.deleteContact.pending]: state => {
      state.isLoading = true;
      state.error = '';
    },

    [contactsOperations.fetchContacts.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [contactsOperations.addContact.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [contactsOperations.deleteContact.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const { setFilter } = contactsSlice.actions;
export default contactsSlice.reducer;
