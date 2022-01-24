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
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "6px",
              padding: "10px",
              marginBottom: "5px",
            }}
          >
            {editable ? (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleEditCard();
                }}
                style={{ display: "flex" }}
              >
                <input
                  className="form-control "
                  type="text"
                  onChange={(e) => {
                    setCardTitle(e.target.value);
                  }}
                  autoFocus
                  value={cardTitle}
                  style={{
                    resize: "none",
                    border: "none",
                    outline: "none",
                    width: "100%",
                  }}
                  onBlur={handleEditCard}
                />
                <button onClick={handleEditCard}>save</button>
              </form>
            ) : (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <p>{text}</p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <button
                    style={{
                      backgroundColor: "#10cab7",
                      color: "white",
                      border: "none",
                      cursor: "pointer",
                      padding: "5px",
                      borderRadius: "3px",
                    }}
                    onClick={() => setEditable(true)}
                  >
                    EDIT
                  </button>
                  <div
                    style={{ padding: "5px", cursor: "pointer" }}
                    onClick={deleteTask}
                  >
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
