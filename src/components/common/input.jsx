import React, { Component } from "react";
const Input = ({
  name,
  label,
  value,
  onChange,
  inputType,
  error,
  autoFocus,
}) => {
  if (!inputType) {
    inputType = "text";
  }

  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={inputType}
        value={value}
        onChange={onChange}
        className="form-control"
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
