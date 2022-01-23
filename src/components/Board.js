import React from "react";
import { useSelector } from "react-redux";
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
        }}
      >
        {lists.map((list) => (
          <List title={list.title} key={list.id} cards={list.cards} />
        ))}
      </div>
    </div>
  );
};
export default Board;
