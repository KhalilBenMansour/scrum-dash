import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCard } from "../JS/actions/cardAction";
import { addList } from "../JS/actions/listAction";

const AddButton = ({ list, listId }) => {
  const [formOpen, setFormOpen] = useState(false);
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const openForm = () => {
    setFormOpen(true);
  };
  const closeForm = () => {
    setFormOpen(false);
  };
  const handleInputChange = (e) => {
    setText(e.target.value);
  };
  const handleAddList = () => {
    if (text === "") return;
    const list = {
      name: text,
    };
    dispatch(addList(list.name));
    setText("");
  };

  const handleAddCard = () => {
    if (text) {
      dispatch(addCard(listId, text));
      setText("");
    }
  };
  const closeButtonHandler = () => {
    setText("");
    setFormOpen(false);
  };
  const handleSubmitCard = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddCard();
    }
  };

  const handleSubmitList = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddList();
    }
  };
  const renderAddButton = () => {
    const buttonText = list ? "Add another list" : "Add another task";
    const buttonTextOpacity = list ? 1 : 0.5;
    const buttonTextColor = list ? "white" : "inherit";
    const buttonTextBackground = list ? "rgba(0,0,0,.15)" : "inherit";
    return (
      <div
        onClick={openForm}
        className="openForButtonGroup"
        style={{
          margin: "5px",
          padding: "5px",
          width: "250px",
          opacity: buttonTextOpacity,
          color: buttonTextColor,
          backgroundColor: buttonTextBackground,
        }}
      >
        <p>+</p>
        <p>{buttonText}</p>
      </div>
    );
  };
  const renderForm = () => {
    const placeholder = list
      ? "Enter list title..."
      : "Enter a title for this card...";
    const buttonTitle = list ? "Add list" : "Add card";
    return (
      <div style={{ marginLeft: 8 }}>
        <div>
          <textarea
            className="add-textarea"
            placeholder={placeholder}
            autoFocus
            onBlur={closeForm}
            value={text}
            onChange={handleInputChange}
            onKeyDown={list ? handleSubmitList : handleSubmitCard}
          />
        </div>
        <div className="formButtonGroup">
          <button onMouseDown={list ? handleAddList : handleAddCard}>
            {buttonTitle}
          </button>
          <p onMouseDown={closeButtonHandler}>x</p>
        </div>
      </div>
    );
  };
  return formOpen ? renderForm() : renderAddButton();
};

export default AddButton;
