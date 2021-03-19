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
    <ul className="list-group">
      {genres.map((item) => (
        <li
          key={item[valueProperty]}
          className={
            item._id === selectedItem._id
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
