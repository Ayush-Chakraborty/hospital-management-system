import React from "react";
import "./patient.css";
import Header from "../Components/Header";
import Search from "../Components/Search";
import Filter from "../Components/Filter";
import CreateNew from "../Components/CreateNew";
import TreatmentRecord from "../Components/TreatmentRecord";

const Patient = ({ show }) => {
  return (
    <div
      style={{
        width: "100%",
      }}
    >
      <Header />
      <div className="searchRow">
        <Search placeholder="Search patients" />
        <Filter />
        <CreateNew onClick={show} />
      </div>
      <TreatmentRecord />
    </div>
  );
};

export default Patient;
