import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../../assets/fierbase";
import * as actionTypes from "./actionTypes";

const q = query(collection(db, "books"));
const querySnapShot = await getDocs(q);
const initialCreatedLists = [];
querySnapShot.forEach((doc) => {
  const data = {
    id: doc.id,
    ...doc.data(),
  };
  initialCreatedLists.push(data);
});

const initialState = [...initialCreatedLists];

const list = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_POST:
      return [...state, action.payload];
    case actionTypes.UPDATE_POST:
      return state.map((post) => {
        if (post.id === action.payload.id) {
          return {
            ...post,
            title: action.payload.title,
            category: action.payload.category,
            content: action.payload.content,
            createdAt: action.payload.createdAt,
          };
        }
        return post;
      });
    case actionTypes.REMOVE_POST:
      return state.filter((post) => post.id !== action.payload);
    default:
      return state;
  }
};

export default list;
