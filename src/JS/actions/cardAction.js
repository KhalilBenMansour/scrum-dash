import { ADD_CARD } from "../actionTypes/actionType";

// create new list on board
export const addCard = (listId, text) => {
  return {
    type: ADD_CARD,
    payload: { listId, text },
  };
};
