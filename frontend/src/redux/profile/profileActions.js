
import { profileUpdateStart, fetchProfileSuccess, fetchProfileFailure } from './profileSlice';

export const fetchUserProfile = () => async (dispatch) => {
    try {
        dispatch(profileUpdateStart());

        const response = await fetch(
           '/api/profile/get-profile',
           {
            credentials:'include',
           }
        );
        const data = await response.json();
        if (data.success) {
            dispatch(fetchProfileSuccess(data));
        }
        else{
            dispatch(fetchProfileFailure(data.message));
        }
    } catch (error) {
        console.log(error);
        dispatch(fetchProfileFailure(error.response?.data?.message || error.message));
    }
};
