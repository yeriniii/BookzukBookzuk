import * as actionTypes from './actionTypes';

const initialState = {
    currentUser: null,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_USER:
            return {
                ...state,
                currentUser: action.payload,
            };
        case actionTypes.CLEAR_USER:
            return {
                ...state,
                currentUser: null,
            };
        case actionTypes.SET_USER_PROFILE:
            return {
                ...state,
                profile: action.payload
            }
        default:
            return state;
    }
};

export default userReducer;
