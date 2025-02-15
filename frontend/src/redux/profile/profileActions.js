
import { profileUpdateStart, profileUpdateSuccess, profileUpdateFailure } from './profileSlice';

export const fetchUserProfile = () => async (dispatch) => {
    try {
        dispatch(profileUpdateStart());

        const response = await fetch(
           '/api/profile/get-profile',
           {
            credentials:'include',
           }
        );
        if (response.data) {
            dispatch(profileUpdateSuccess(response.data.userDetails));
        }
    } catch (error) {
        console.log(error);
        dispatch(profileUpdateFailure(error.response?.data?.message || error.message));
    }
};