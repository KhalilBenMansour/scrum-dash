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
                className="list-main"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                <h4 className="list-title">{title}</h4>
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
