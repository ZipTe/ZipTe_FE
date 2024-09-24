import { createSlice } from '@reduxjs/toolkit';

const initState = {
  email: '',
};

const loginSlice = createSlice({
  name: 'loginSlice',
  initialState: initState,
  reducers: {
    login: (state) => {
      console.log('..Login ' + state);
    },
    logout: (state) => {
      console.log('..Logout ' + state);
    },
  },
});

export const { login, logout } = loginSlice.actions;

export default loginSlice.reducer;
