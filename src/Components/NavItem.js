import React from "react";
import "./navItem.css";
export default function NavItem({ text, isActive }) {
  const green = "#2dba3b";
  return (
    <div
      style={{
        borderBottom: isActive && "2.5px #2dba3b solid",
      }}
      className="navItem"
    >
      {text}
    </div>
  );
}
