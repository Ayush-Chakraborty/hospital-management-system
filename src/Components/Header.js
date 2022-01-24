import React from "react";
import "./header.css";
import logo from "../assets/logo.svg";
import NavItem from "./NavItem";
export default function Header() {
  return (
    <header>
      <div className="left_header">
        <img src={logo} alt="Logo" className="logo" />
        <h1>LMH</h1>
      </div>
      <nav>
        <NavItem text="Patients" isActive={true} />
        <NavItem text="Doctors" isActive={false} />
        <NavItem text="Treatments" isActive={false} />
      </nav>
    </header>
  );
}
