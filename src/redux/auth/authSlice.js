import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from './auhtServices';

const initialState = {
  token: null,
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: '',
};

const resetState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: '',
};

export const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    reset: resetState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.token = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const login = createAsyncThunk('login-thunk', async (data) => {
  try {
    return await authService.login(data);
  } catch (error) {console.log(error)}
});

export const { reset } = authSlice.actions;
export default authSlice.reducer
