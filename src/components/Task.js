import React from "react";
import { Draggable } from "react-beautiful-dnd";

const Task = ({ text, id, index }) => {
  return (
    <Draggable draggableId={String(id)} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "6px",
              padding: "10px",
              marginBottom: "5px",
            }}
          >
            <p>{text}</p>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default Task;
