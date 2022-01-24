import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import AddButton from "./AddButton";
import Task from "./Task";

const List = ({ title, cards, listId, index }) => {
  return (
    <Draggable draggableId={String(listId)} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          ref={provided.innerRef}
          {...provided.dragHandleProps}
        >
          <Droppable droppableId={String(listId)}>
            {(provided) => (
              <div
                style={{
                  backgroundColor: "#ccc",
                  padding: "5px",
                  margin: "5px",
                  width: "280px",
                  borderRadius: "6px",
                  boxShadow: "-3px -2px 5px 2px rgba(0,0,0,0.15)",
                }}
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                <h4 style={{ padding: "10px" }}>{title}</h4>
                {cards.map((card, index) => (
                  <Task
                    key={card.id}
                    index={index}
                    text={card.text}
                    id={card.id}
                    listId={listId}
                  />
                ))}
                {provided.placeholder}
                <AddButton listId={listId} />
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  );
};

export default List;
