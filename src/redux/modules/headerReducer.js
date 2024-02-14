const initialState = "리뷰";

const TABBUTTN = "TABBUTTN";
export const tabClick = (tabName) => {
  return {
    type: TABBUTTN,
    payload: tabName,
  };
};

const headerName = (state = initialState, action) => {
  switch (action.type) {
    case TABBUTTN:
      return action.payload;
    default:
      return state;
  }
};

export default headerName;
