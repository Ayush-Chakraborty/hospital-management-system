import React from "react";
import "./dropDownItem.css";
export default function DropDownItem({ text }) {
  return (
    <div
      style={{
        width: "100%",
        padding: "10px 15px",
        backgroundColor: "#D5F1D8",
        borderBottom: "#2dba3b50 1px solid",
      }}
    >
      <label
        style={{
          fontSize: "1rem",
        }}
      >
        <input
          type="checkbox"
          style={{
            marginRight: "10px",
            transform: "scale(1)",
            backgroundColor: "green",
          }}
          className="check"
        />
        {text}
      </label>
    </div>
  );
}
