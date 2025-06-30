import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthUser } from '../types/user';

const initialState: Record<string, AuthUser | null> = {
  user: null,
};

const userSlice = createSlice({
  name: 'authUser',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<AuthUser>) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
