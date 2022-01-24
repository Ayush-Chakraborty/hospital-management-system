import React from "react";
import plus from "../assets/plus.svg";
export default function CreateNew({ onClick }) {
  return (
    <button
      style={{
        marginLeft: 30,
        outline: "none",
        backgroundColor: "#2DBA3B",
        border: "none",
        color: "white",
        padding: "0px 20px",
        borderRadius: 7,
        fontWeight: "600",
        cursor: "pointer",
        fontSize: "1rem",
        display: "flex",
        alignItems: "center",
      }}
      onClick={onClick}
    >
      <img src={plus} alt="plus icon" height={20} style={{ marginRight: 10 }} />
      Create New
    </button>
  );
}
