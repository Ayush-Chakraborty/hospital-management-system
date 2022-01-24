import React, { useEffect, useRef, useState } from "react";
import filter from "../assets/filter.svg";
import dd from "../assets/dropdown.svg";
import DropDownItem from "./DropDownItem";
export default function Filter() {
  const filterRef = useRef();
  const ddicon = useRef();
  const [onFilter, setOnFilter] = useState(false);
  const [insideFilter, setInsidefilter] = useState(false);

  useEffect(() => {
    if (onFilter || insideFilter) {
      filterRef.current.style.transform = "scaleY(1)";
      ddicon.current.style.transform = "rotateX(-180deg)";
    } else {
      ddicon.current.style.transform = "rotateX(0deg)";
      filterRef.current.style.transform = "scaleY(0)";
    }
  }, [onFilter, insideFilter]);
  return (
    <div
      style={{
        position: "relative",
      }}
      onMouseEnter={() => {
        setOnFilter(true);
      }}
      onMouseLeave={() => {
        setOnFilter(false);
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          borderBottom: "2.5px solid #2dba3b",
          cursor: "pointer",
          alignSelf: "end",
        }}
      >
        <img src={filter} alt="filter icon" height={20} />
        <span
          style={{
            color: "#2dba3b",
            fontWeight: "600",
            fontSize: "1.1rem",
            marginLeft: "10px",
            top: 0,
          }}
        >
          Apply Filter
        </span>
        <img
          src={dd}
          alt="dropdown icon"
          height={30}
          ref={ddicon}
          style={{
            transition: "all 0.5s",
          }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          transition: "all 0.5s",
          transformOrigin: "top",
          transform: "scaleY(0)",
          boxShadow: "0 0 10px #00000040",
        }}
        ref={filterRef}
        onMouseEnter={() => {
          setInsidefilter(true);
        }}
        onMouseLeave={() => {
          setInsidefilter(false);
        }}
      >
        <DropDownItem text="Medicine" />
        <DropDownItem text="Vaccination" />
        <DropDownItem text="Operation" />
        <DropDownItem text="Check up" />
      </div>
    </div>
  );
}
