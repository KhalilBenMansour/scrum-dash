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
        style={{
          ...styles.openForButtonGroup,
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
            placeholder={placeholder}
            autoFocus
            style={{
              resize: "none",
              border: "none",
              outline: "none",
              width: "260px",
              height: "60px",
            }}
            onBlur={closeForm}
            value={text}
            onChange={handleInputChange}
            onKeyDown={list ? handleSubmitList : handleSubmitCard}
          />
        </div>
        <div style={{ ...styles.formButtonGroup }}>
          <button
            style={{
              color: "white",
              backgroundColor: "#5aac44",
              border: "none",
              padding: "7px",
              cursor: "pointer",
              borderRadius: "6px",
            }}
            onMouseDown={list ? handleAddList : handleAddCard}
          >
            {buttonTitle}
          </button>
          <p
            style={{ marginLeft: "8px", cursor: "pointer" }}
            onMouseDown={closeButtonHandler}
          >
            x
          </p>
        </div>
      </div>
    );
  };
  return formOpen ? renderForm() : renderAddButton();
};
const styles = {
  openForButtonGroup: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    borderRadius: 3,
    height: 36,
    paddingLeft: 10,
  },
  formButtonGroup: {
    marginTop: "8",
    display: "flex",
    alignItems: "center",
  },
};

export default AddButton;
