import React from "react";

export default function Search({ placeholder }) {
  return (
    <input
      placeholder={placeholder}
      style={{
        padding: "10px 20px",
        backgroundColor: "#D5F1D8",
        width: "100%",
        borderRadius: "100px",
        border: "2px solid #2dba3b",
        margin: "0px 20px",
        maxWidth: "600px",
        outline: "none",
      }}
      type="search"
    ></input>
  );
}
