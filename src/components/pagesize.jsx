import React, { Component } from "react";

const PageSize = (props) => {
  const { pageSize, pageSizeList, OnPageSizeChange } = props;

  return (
    <select className="form-select px-2">
      {pageSizeList.map((item) => (
        <option value="{item}">{item}</option>
      ))}
    </select>
  );
};

export default PageSize;
