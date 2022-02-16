import React from "react";
import "./Input.scss";
type InputProps = {
  handleSearch: handleSearch;
};
function Input({ handleSearch }: InputProps) {
  return (
    <input
      type="text"
      placeholder="Search for companies"
      className="cosuno-input-field"
      onChange={handleSearch}
    />
  );
}

export default Input;
