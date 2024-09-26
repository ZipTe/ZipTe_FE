import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { loginPost } from '../api/memberApi';

const initState = {
  email: '',
};
export const loginPostAsync = createAsyncThunk('loginPostAsync', (param) => {
  return loginPost(param);
});

const loginSlice = createSlice({
  name: 'loginSlice',
  initialState: initState,
  reducers: {
    login: (state, action) => {
      console.log('...Login');
      console.log(action.payload);

      return { email: state.email };
    },
    logout: () => {
      console.log('..Logout');
      return { initState };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginPostAsync.fulfilled, (state, action) => {
      console.log('fulfilled');
      return { email: action.payload.email };
    });
    builder.addCase(loginPostAsync.pending, (state, action) => {
      console.log('pending');
    });
    builder.addCase(loginPostAsync.rejected, (state, action) => {
      console.log('rejected');
    });
  },
});

export const { login, logout } = loginSlice.actions;

export default loginSlice.reducer;
