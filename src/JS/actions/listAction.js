import { ADD_LIST, DRAG_HAPPENED } from "../actionTypes/actionType";

// create new list on board
export const addList = (listTitle) => {
  return {
    type: ADD_LIST,
    payload: listTitle,
  };
};
export const sort = (
  droppableIdStart,
  droppableIdEnd,
  droppableIndexStart,
  droppableIndexEnd,
  draggableId,
  type
) => {
  return {
    type: DRAG_HAPPENED,
    payload: {
      droppableIdStart,
      droppableIdEnd,
      droppableIndexStart,
      droppableIndexEnd,
      draggableId,
      type,
    },
  };
};
