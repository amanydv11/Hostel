import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: null,
  error: null,
  loading: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    signInFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateStart:(state)=>{
      state.loading =true;
      state.error =null;
    },
    updateSuccess:(state,action)=>{
      state.currentUser =action.payload;
      state.loading=false;
      state.error=null;
    },
    updateFailure:(state,action)=>{
      state.loading = false;
      state.error = action.payload;
    },
    deletUserStart:(state)=>{
      state.loading =true;
      state.error =null;
    },
    deleteUserSuccess:(state)=>{
      state.currentUser =null;
      state.loading=false;
      state.error=null;
    },
    deleteUserFailure:(state,action)=>{
      state.loading = false;
      state.error = action.payload;
    },
    signoutSuccess:(state) =>{
      state.currentUser =null;
      state.loading=false;
      state.error=null;
    },
    updateProfilePictureStart:(state)=>{
      state.loading =true;
      state.error =null;
    },
    updateProfilePictureSuccess:(state,action)=>{
      state.currentUser =action.payload;
      state.loading=false;
      state.error=null;
    },
    updateProfilePictureFailure:(state,action)=>{
      state.loading =false;
      state.error =action.payload;
    },
    setProperties: (state, action) => {
      state.properties = action.payload.properties
    }, 
    setTripList: (state, action) => {
      state.currentUser.tripList = action.payload
    },
    setWishList: (state, action) => {
      state.currentUser.wishList = action.payload
    },
    setPropertyList: (state, action) => {
      state.currentUser.propertyList = action.payload
    },
    setReservationList: (state, action) => {
      state.currentUser.reservationList = action.payload
    }
 
}
})

export const {signInStart,signInFailure,signInSuccess,
  updateStart,updateSuccess,updateFailure,
  setProperties,setTripList,setWishList,setPropertyList,setReservationList,
deletUserStart,deleteUserSuccess,deleteUserFailure,signoutSuccess,updateProfilePictureStart,updateProfilePictureSuccess,updateProfilePictureFailure} =userSlice.actions;
export default userSlice.reducer;