import React from "react";
import { useSelector } from "react-redux";
import AddButton from "./AddButton";
import List from "./List";

const Board = () => {
  const { lists } = useSelector((state) => state);
  return (
    <div>
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          height: "100%",
          backgroundColor: "gray",
        }}
      >
        {lists.map((list) => (
          <List
            title={list.title}
            key={list.id}
            listId={list.id}
            cards={list.cards}
          />
        ))}
        <AddButton list />
      </div>
    </div>
  );
};
export default Board;
