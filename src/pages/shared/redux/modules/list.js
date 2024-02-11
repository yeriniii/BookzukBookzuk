import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../../../../assets/fierbase";

const q = query(collection(db, "bookReviews"));
const querySnapShot = await getDocs(q);

const initialCreatedLists = [];

querySnapShot.forEach((doc) => {
  const data = {
    id: doc.id,
    ...doc.data(),
  };
  initialCreatedLists.push(data);
});

const initialState = initialCreatedLists;

const SEARCHEDBOOK = "SEARCHEDBOOK";

export const searchedBooks = (filteredLists) => {
  return {
    type: SEARCHEDBOOK,
    pyload: filteredLists,
  };
};

const list = (state = initialState, action) => {
  switch (action.type) {
    case SEARCHEDBOOK:
      return action.pyload;
    default:
      return state;
  }
};

export default list;
