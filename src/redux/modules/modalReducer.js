import * as actionTypes from "./actionTypes";

const initialState = {
    isVisible: false,
    message: '',
};

function modalReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.SHOW_MODAL:
            return {
                ...state,
                isVisible: true,
                message: action.payload.message,
            };
        case actionTypes.HIDE_MODAL:
            return {
                ...initialState,
                isVisible: false,
            };
        default:
            return state;
    }
}

export default modalReducer;