import React, { Component } from "react";

const ListGroup = (props) => {
  const {
    genres,
    textProperty,
    valueProperty,
    onGenreChange: onItemSelect,
    currentGrene: selectedItem,
  } = props;

  return (
    <ul className="list-group clickable">
      {genres.map((item) => (
        <li
          key={item[valueProperty]}
          className={
            selectedItem && item._id === selectedItem._id
              ? "list-group-item active"
              : "list-group-item"
          }
          onClick={() => onItemSelect(item)}
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );

  ListGroup.defaultProps = {
    textProperty: "name",
    valueProperty: "_id",
  };
};

export default ListGroup;
