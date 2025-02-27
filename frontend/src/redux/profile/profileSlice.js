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
          resetProfile:(state)=>{
return initialState;
          },
          clearUserProfile: (state) => {
            state.userProfile = null;
            state.loading = false;
            state.error = null;
          },
          fetchProfileStart: (state) => {
            state.loading = true;
            state.error = null;
          },
          fetchProfileSuccess: (state, action) => {
            state.userProfile = action.payload;
            state.loading = false;
            state.error = null;
          },
          fetchProfileFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
          }

          
    }
  })
  export const {profileUpdateFailure,profileUpdateStart,profileUpdateSuccess,resetProfile,clearUserProfile,fetchProfileStart,fetchProfileSuccess,fetchProfileFailure} =profileSlice.actions;
  export const selectUserProfile = (state) => state.profile.userProfile;
  export default profileSlice.reducer;