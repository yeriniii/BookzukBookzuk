import * as actionTypes from './actionTypes';

const initialState = {
    posts: [],
};

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_POST:
            return {
                ...state,
                posts: [...state.posts, action.payload]
            };
        case actionTypes.REMOVE_POST:
            return {
                ...state,
                posts: state.posts.filter((post) => post.id !== action.payload.id)
            };
        case actionTypes.UPDATE_POST:
            return state.posts.map((post) => {
                if (post.id === action.payload.id) {
                    return {
                        ...post,
                        content: action.payload.content,
                    };
                }
                return post;
            });
        default:
            return state;
    }
};

export default postReducer;