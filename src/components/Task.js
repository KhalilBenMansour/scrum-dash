import React from "react";

const Task = ({ text }) => {
  return (
    <div>
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
  );
};

export default Task;
