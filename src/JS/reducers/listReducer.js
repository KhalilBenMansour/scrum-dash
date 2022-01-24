import { ADD_CARD, ADD_LIST, DRAG_HAPPENED } from "../actionTypes/actionType";
let listId = 2;
let cardId = 5;
const initialState = [
  {
    id: `list-${0}`,
    title: "todo",
    cards: [
      {
        id: `card-${0}`,
        text: "do the front end ",
      },
      {
        id: `card-${1}`,
        text: "drag and drop card",
      },
    ],
  },
  {
    id: `list-${1}`,
    title: "doing",
    cards: [
      {
        id: `card-${2}`,
        text: "add another list ",
      },
      {
        id: `card-${3}`,
        text: "change title",
      },
      {
        id: `card-${4}`,
        text: "add another card",
      },
    ],
  },
];

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LIST:
      const newList = {
        title: action.payload,
        id: `list-${listId}`,
        cards: [],
      };
      listId += 1;
      return [...state, newList];

    case ADD_CARD: {
      const newCard = { text: action.payload.text, id: `card-${cardId}` };
      cardId += 1;
      const newState = state.map((list) => {
        if (list.id === action.payload.listId) {
          return { ...list, cards: [...list.cards, newCard] };
        } else {
          return list;
        }
      });
      return newState;
    }

    case DRAG_HAPPENED:
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexStart,
        droppableIndexEnd,
        draggableId,
        type,
      } = action.payload;
      const newStatelist = [...state];
      // dragging the list around
      if (type === "list") {
        const list = newStatelist.splice(droppableIndexStart, 1);
        newStatelist.splice(droppableIndexEnd, 0, ...list);
        return newStatelist;
      }
      // in the same list
      if (droppableIdStart === droppableIdEnd) {
        const list = state.find((list) => droppableIdStart === list.id);
        const card = list.cards.splice(droppableIndexStart, 1);
        list.cards.splice(droppableIndexEnd, 0, ...card);
      }
      // other list
      if (droppableIdStart !== droppableIdEnd) {
        // find the list where the drag happened
        const listStart = state.find((list) => droppableIdStart === list.id);
        // pull out the card from this list
        const card = listStart.cards.splice(droppableIndexStart, 1);
        // find the list where the drag ended
        const listEnd = state.find((list) => droppableIdEnd === list.id);
        // put the card in the new list
        listEnd.cards.splice(droppableIndexEnd, 0, ...card);
      }
      return newStatelist;

    default:
      return state;
  }
};

export default listReducer;
