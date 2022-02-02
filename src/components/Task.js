import React, { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";

import { deleteCard, editCard } from "../JS/actions/cardAction";

const Task = ({ text, id, index, listId }) => {
  const [editable, setEditable] = useState(false);
  const [cardTitle, setCardTitle] = useState(text);

  const dispatch = useDispatch();
  const deleteTask = () => {
    dispatch(deleteCard(listId, id));
  };
  const handleEditCard = () => {
    setEditable(false);

    if (cardTitle === "") {
      setCardTitle(text);
      return;
    }
    setCardTitle(text);
    dispatch(editCard(listId, id, cardTitle));
    text = cardTitle;
  };

  return (
    <Draggable draggableId={String(id)} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className="task-card">
            {editable ? (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleEditCard();
                }}
                className="task-form"
              >
                <input
                  className="form-control "
                  type="text"
                  onChange={(e) => {
                    setCardTitle(e.target.value);
                  }}
                  autoFocus
                  value={cardTitle}
                  onBlur={handleEditCard}
                />
                <button onClick={handleEditCard}>save</button>
              </form>
            ) : (
              <div className="task-view">
                <p>{text}</p>
                <div className="task-edit-remove">
                  <button
                    className="button-edit"
                    onClick={() => setEditable(true)}
                  >
                    EDIT
                  </button>
                  <div className="delete-item" onClick={deleteTask}>
                    x
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default Task;
