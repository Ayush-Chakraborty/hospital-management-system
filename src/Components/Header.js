import React from "react";
import "./header.css";
import logo from "../assets/logo.svg";
import NavItem from "./NavItem";
export default function Header({ index, setTab }) {
  return (
    <header>
      <div className="left_header">
        <img src={logo} alt="Logo" className="logo" />
        <h1>LMH</h1>
      </div>
      <nav>
        <NavItem
          text="Patients"
          isActive={index === 0}
          onClick={() => {
            setTab(1);
          }}
        />
        <NavItem
          text="Doctors"
          isActive={index === 1}
          onClick={() => {
            setTab(2);
          }}
        />
        {/* <NavItem text="Treatments" isActive={index == 2} setTab={setTab} /> */}
      </nav>
    </header>
  );
}
