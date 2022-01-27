import React, { useState } from "react";
import "./patient.css";
import Header from "../Components/Header";
import Search from "../Components/Search";
import Filter from "../Components/Filter";
import CreateNew from "../Components/CreateNew";
import TreatmentRecord from "../Components/TreatmentRecord";

const Patient = ({ show, setTab, treatments }) => {
  const [filter, setFilter] = useState([false, false, false, false]);
  const [query, setQuery] = useState("");
  return (
    <div
      style={{
        width: "100%",
      }}
    >
      <Header setTab={setTab} index={0} />
      <div className="searchRow">
        <Search
          placeholder="Search patients"
          onChange={(text) => {
            setQuery(text);
          }}
        />
        <Filter setFilter={setFilter} />
        <CreateNew onClick={show} />
      </div>
      <TreatmentRecord treatments={treatments} filter={filter} query={query} />
    </div>
  );
};

export default Patient;
