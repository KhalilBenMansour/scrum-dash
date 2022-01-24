import { ADD_CARD, ADD_LIST } from "../actionTypes/actionType";
let listId = 2;
let cardId = 3;
const initialState = [
  {
    id: 0,
    title: "todo",
    cards: [
      {
        id: 0,
        text: "do the front end ",
      },
      {
        id: 1,
        text: "drag and drop card",
      },
    ],
  },
  {
    id: 1,
    title: "todo",
    cards: [
      {
        id: 0,
        text: "add another list ",
      },
      {
        id: 1,
        text: "change title",
      },
      {
        id: 2,
        text: "add another card",
      },
    ],
  },
];

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LIST:
      const newList = { title: action.payload, id: listId, cards: [] };
      listId += 1;
      return [...state, newList];

    case ADD_CARD:
      const newCard = { text: action.payload.text, id: cardId };
      cardId += 1;
      const newState = state.map((list) => {
        if (list.id === action.payload.listId) {
          return { ...list, cards: [...list.cards, newCard] };
        } else {
          return list;
        }
      });
      return newState;
    default:
      return state;
  }
};

export default listReducer;
