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
    default:
      return state;
  }
};

export default listReducer;
