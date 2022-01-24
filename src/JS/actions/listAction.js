import { ADD_LIST } from "../actionTypes/actionType";

// create new list on board
export const addList = (listTitle) => {
  return {
    type: ADD_LIST,
    payload: listTitle,
  };
};
