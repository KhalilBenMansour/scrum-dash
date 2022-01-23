import React from "react";
import Task from "./Task";

const List = ({ title, cards }) => {
  return (
    <div
      style={{
        backgroundColor: "#eee",
        padding: "5px",
        margin: "5px",
        width: "280px",
        borderRadius: "6px",
      }}
    >
      <h4 style={{ padding: "10px" }}>{title}</h4>
      {cards.map((card) => (
        <Task key={card.id} text={card.text} />
      ))}
    </div>
  );
};

export default List;
