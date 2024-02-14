import * as actionTypes from "./actionTypes";

const initialState = {
  isVisible: false,
  message: "",
};

function modalReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SHOW_MODAL:
      return {
        ...state,
        isVisible: true,
        message: action.payload.message,
        onCanel: action.payload.onCancel,
        onConfirm: action.payload.onConfirm,
        showCancelButton: action.payload.showCancelButton,
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
