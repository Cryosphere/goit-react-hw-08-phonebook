import { createSlice } from '@reduxjs/toolkit';
import { register, loginization, logOut, refreshUser } from './operations';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// це для того щоб виводити помилки в тостах
const handlePending = state => {
  state.contacts.isLoading = true;
  state.contacts.error = null;
};

const handleRejected = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.error = action.payload;

  toast.error(
    `${action.payload}` === 'Network Error'
      ? `${action.payload}`
      : 'Something went wrong. Check your data and try again'
  );
};

const authSlise = createSlice({
  name: 'auth',
  initialState: {
    user: { email: null, password: null },
    token: null,
    isLoaggedIn: false,
    isRefreshing: false,
  },
  extraReducers: builder => {
    builder
      .addCase(register.pending, handlePending)
      .addCase(register.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.isLoaggedIn = true;
        state.contacts.isLoading = false;
      })
      .addCase(register.rejected, handleRejected)

      .addCase(loginization.pending, handlePending)
      .addCase(loginization.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.isLoaggedIn = true;
        state.contacts.isLoading = false;
      })
      .addCase(loginization.rejected, handleRejected)

      .addCase(logOut.pending, handlePending)
      .addCase(logOut.fulfilled, state => {
        state.user = { email: null, password: null };
        state.token = null;
        state.isLoaggedIn = false;
        state.isRefreshing = false;
        state.contacts.error = null;
        state.contacts.isLoading = false;
      })
      .addCase(logOut.rejected, handleRejected)

      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoaggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state, action) => {
        state.isRefreshing = false;
      });
  },
});

export const authReducer = authSlise.reducer;
