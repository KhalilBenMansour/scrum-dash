import React from "react";
import { Droppable } from "react-beautiful-dnd";
import { DragDropContext } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { sort } from "../JS/actions/listAction";
import AddButton from "./AddButton";
import List from "./List";

const Board = () => {
  const dispatch = useDispatch();
  const onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;
    if (!destination) {
      return;
    }
    dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId,
        type
      )
    );
  };
  const { lists } = useSelector((state) => state);
  return (
    <div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="columns" type="list" direction="horizontal">
          {(provided) => (
            <div
              className="container"
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                height: "100%",
                backgroundColor: "gray",
              }}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {lists.map((list, index) => (
                <List
                  title={list.title}
                  key={list.id}
                  listId={list.id}
                  cards={list.cards}
                  index={index}
                />
              ))}
              {provided.placeholder}
              <AddButton list />
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};
export default Board;
