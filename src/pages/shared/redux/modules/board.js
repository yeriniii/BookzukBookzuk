const ADD_BOARD = "board/ADD_BOARD";
const DELETE_BOARD = "board/DELETE_BOARD";
const UPDATE_BOARD = "board/UPDATE_BOARD";

export const addBoard = (payload) => {
  return {
    type: ADD_BOARD,
    payload,
  };
};
export const deleteBoard = (payload) => {
  return {
    type: DELETE_BOARD,
    payload,
  };
};
export const updateBoard = (payload) => {
  return {
    type: UPDATE_BOARD,
    payload,
  };
};

const initialState = [];

const boardData = (state = initialState, action) => {
  switch (action.type) {
    //form에서 등록
    case ADD_BOARD:
      return [action.payload, ...state];
    //디테일 페이지에서 수정&삭제
    case DELETE_BOARD:
      return state.filter((board) => {
        return board.id !== action.payload;
      });
    case UPDATE_BOARD:
      return;
    default:
      return state;
  }
};
export default boardData;
