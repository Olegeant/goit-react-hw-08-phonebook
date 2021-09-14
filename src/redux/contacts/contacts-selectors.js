import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts.items;

export const getFilter = state => state.contacts.filter;

export const getFilteredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) =>
    contacts.filter(({ name }) => name.toLowerCase().includes(filter)),
);

export const checkIfSmthInPhonebook = state => state.contacts.items.length > 0;

export const checkIfIsLoading = state => state.contacts.isLoading;

export const getError = state => state.contacts.error;
