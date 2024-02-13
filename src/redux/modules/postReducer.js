import * as actionTypes from "./actionTypes";

const initialState = {
  posts: [],
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    case actionTypes.REMOVE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload.id),
      };
    case actionTypes.UPDATE_POST:
      return {
        ...state,
        posts: state.posts.map((post) => {
          return {
            ...post,
            title: action.payload.title,
            category: action.payload.category,
            content: action.payload.content,
            createdAt: action.payload.createdAt,
          };
        }),
      };
    default:
      return state;
  }
};

export default postReducer;
