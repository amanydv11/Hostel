import { createSlice } from '@reduxjs/toolkit';
const  initialState = {
    userProfile: null,
    loading: false,
    error: null,
  };
  const profileSlice = createSlice({
    name:"profile",
    initialState,
    reducers:{
        profileUpdateStart:(state) => {
            state.loading = true;
            state.error = null;
          },
          profileUpdateSuccess:(state,action) => {
            state.userProfile = action.payload;
        state.loading = false;
        state.error = null;
          },
          profileUpdateFailure:(state,action) => {
            state.loading = false;
            state.error = action.payload;
          },
    }
  })
  export const {profileUpdateFailure,profileUpdateStart,profileUpdateSuccess} =profileSlice.actions;
  export const selectUserProfile = (state) => state.profile.userProfile;
  export default profileSlice.reducer;