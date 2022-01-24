import React from "react";
import AddButton from "./AddButton";
import Task from "./Task";

const List = ({ title, cards, listId }) => {
  return (
    <div
      style={{
        backgroundColor: "#ccc",
        padding: "5px",
        margin: "5px",
        width: "280px",
        height: "100%",
        borderRadius: "6px",
        boxShadow: "-3px -2px 5px 2px rgba(0,0,0,0.15)",
      }}
    >
      <h4 style={{ padding: "10px" }}>{title}</h4>
      {cards.map((card) => (
        <Task key={card.id} text={card.text} />
      ))}
      <AddButton listId={listId} />
    </div>
  );
};

export default List;
