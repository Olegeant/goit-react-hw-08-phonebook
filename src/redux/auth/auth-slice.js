import { createSlice } from '@reduxjs/toolkit';
import { authOperations } from './';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isLoading: false,
  error: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [authOperations.logIn.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [authOperations.logOut.fulfilled]: (state, action) => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.isLoading = false;
    },
    [authOperations.fetchCurrentUser.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isLoading = false;
    },

    [authOperations.register.pending]: state => {
      state.isLoading = true;
      state.error = '';
    },
    [authOperations.logIn.pending]: state => {
      state.isLoading = true;
      state.error = '';
    },
    [authOperations.logOut.pending]: state => {
      state.isLoading = true;
      state.error = '';
    },
    [authOperations.fetchCurrentUser.pending]: state => {
      state.isLoading = true;
      state.error = '';
    },

    [authOperations.register.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [authOperations.logIn.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [authOperations.logOut.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [authOperations.fetchCurrentUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export default authSlice.reducer;
