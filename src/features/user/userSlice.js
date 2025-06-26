import { createSlice } from '@reduxjs/toolkit';

// Initial state: no user is logged in
const initialState = {
  currentUser: null,
};

// Create the user slice
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      return { ...state, currentUser: action.payload };
    },
  },
});

// Export the reducer and action
export const userReducer = userSlice.reducer;
export const { setCurrentUser } = userSlice.actions;

// Selector function
export const selectCurrentUser = (state) => state.user.currentUser;