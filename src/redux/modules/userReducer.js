import * as actionTypes from './actionTypes';

const initialState = {
    currentUser: null,
    isLoading: true
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_USER:
            return {
                ...state,
                currentUser: action.payload,
                isLoading: false
            };
        case actionTypes.CLEAR_USER:
            return {
                ...state,
                currentUser: null,
                isLoading: false
            };
        case actionTypes.SET_USER_PROFILE:
            return {
                ...state,
                profile: action.payload
            }
        case actionTypes.SET_USER_POSTS:
            return {
                ...state,
                posts: action.payload
            }
        default:
            return state;
    }
};

export default userReducer;
