import { ADD_CARD, DELETE_TASK, EDIT_TASK } from "../actionTypes/actionType";

// create new card on list
export const addCard = (listId, text) => {
  return {
    type: ADD_CARD,
    payload: { listId, text },
  };
};
export const deleteCard = (idList, idCard) => {
  return {
    type: DELETE_TASK,
    payload: { idList, idCard },
  };
};
export const editCard = (lid, cid, cardText) => {
  return {
    type: EDIT_TASK,
    payload: { lid, cid, cardText },
  };
};
