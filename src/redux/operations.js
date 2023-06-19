import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://64801fd4f061e6ec4d489cbd.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const responce = await axios.get('/contacts/');
      return responce.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const responce = await axios.post('/contacts', contact);
      return responce.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const responce = await axios.delete(`/contacts/${id}`);
      console.log(id);
      return responce.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
