import * as actionTypes from './actionTypes';

// 사용자 정보 관련 정의
export const setUser = (user) => {
    return {
        type: actionTypes.SET_USER,
        payload: user
    };
};

export const clearUser = () => {
    return {
        type: actionTypes.CLEAR_USER
    };
};

// 게시글 관련 정의
export const addPost = (payload) => {
    return {
        type: actionTypes.ADD_POST,
        payload,
    };
};
export const removePost = (payload) => {
    return {
        type: actionTypes.REMOVE_POST,
        payload,
    };
};
export const updatePost = (payload) => {
    return {
        type: actionTypes.UPDATE_POST,
        payload,
    };
};