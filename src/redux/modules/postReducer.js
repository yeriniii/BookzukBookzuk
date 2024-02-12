import * as actionTypes from './actionTypes';

const initialState = [];

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_POST:
            return [action.payload, ...state];
        case actionTypes.REMOVE_POST:
            return state.filter((post) => post.id !== action.payload.id);
        case actionTypes.UPDATE_POST:
            return state.map((post) => {
                if (post.id === action.payload.id) {
                    return {
                        ...post,
                        content: action.payload.content
                    }
                }
            })
        default:
            return state;
    }
}

export default postReducer;