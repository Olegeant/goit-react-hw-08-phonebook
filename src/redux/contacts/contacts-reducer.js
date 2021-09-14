// import { createReducer } from '@reduxjs/toolkit';
// import { combineReducers } from 'redux';
// import { contactsOperations } from './';

// const items = createReducer([], {
//   [contactsOperations.fetchContacts.fulfilled]: (_, { payload }) => payload,
//   [contactsOperations.addContact.fulfilled]: (state, { payload }) => [
//     ...state,
//     payload,
//   ],
//   [contactsOperations.deleteContact.fulfilled]: (state, { payload }) => {
//     return state.filter(({ id }) => id !== payload);
//   },
// });

// const filter = createReducer('', {
//   [contactsOperations.setFilter]: (_, { payload }) => payload,
// });

// const error = createReducer('', {
//   [contactsOperations.fetchContacts.rejected]: (_, { payload }) => payload,
//   [contactsOperations.addContact.rejected]: (_, { payload }) => payload,
//   [contactsOperations.deleteContact.rejected]: (_, { payload }) => payload,

//   [contactsOperations.fetchContacts.pending]: () => '',
//   [contactsOperations.addContact.pending]: () => '',
//   [contactsOperations.deleteContact.pending]: () => '',
// });

// const isLoading = createReducer(false, {
//   [contactsOperations.fetchContacts.pending]: () => true,
//   [contactsOperations.addContact.pending]: () => true,
//   [contactsOperations.deleteContact.pending]: () => true,

//   [contactsOperations.fetchContacts.fulfilled]: () => false,
//   [contactsOperations.addContact.fulfilled]: () => false,
//   [contactsOperations.deleteContact.fulfilled]: () => false,

//   [contactsOperations.fetchContacts.rejected]: () => false,
//   [contactsOperations.addContact.rejected]: () => false,
//   [contactsOperations.deleteContact.rejected]: () => false,
// });

// const contactsReducer = combineReducers({
//   items,
//   filter,
//   isLoading,
//   error,
// });

// export default contactsReducer;
