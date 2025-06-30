import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthUser } from '../types/user';

interface UserState {
  user: AuthUser | null
}

const initialState: UserState = {
  user: null,
};

const userSlice = createSlice({
  name: 'authUser',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<AuthUser>) => {
      console.log(action, action.payload)
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
