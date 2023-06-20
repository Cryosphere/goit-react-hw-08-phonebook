import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './filterSlice.js';
import { contactsReducer } from './contactSlice.js';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
