import React, { useEffect, useState } from "react";
import Fuse from "fuse.js";
import "./table.css";

export default function TreatmentRecord({ treatments, filter, query }) {
  const [actualList, setActualList] = useState([]);
  const [treatmentList, setTreatmentList] = useState([]);
  const [fuse, setFuse] = useState();

  useEffect(() => {
    setTreatmentList(treatments);
    setActualList(treatments);
    setFuse(
      new Fuse(treatments, {
        keys: ["name"],
      })
    );
    console.log(treatments);
  }, [treatments]);

  useEffect(() => {
    if (!actualList || !actualList.length) return;
    let list = actualList;
    if (fuse && query !== "") {
      const results = fuse.search(query);
      list = results.map((result) => result.item);
    }
    const b = filter[0] || filter[1] || filter[2] || filter[3];
    if (!b) {
      setTreatmentList(list);
      return;
    }
    const newList = [];
    for (let item of list) {
      if (filter[0] && item.catagory === "Medicine") newList.push(item);
      else if (filter[1] && item.catagory === "Vaccination") newList.push(item);
      else if (filter[2] && item.catagory === "Operation") newList.push(item);
      else if (filter[3] && item.catagory === "Check up") newList.push(item);
    }
    setTreatmentList(newList);
  }, [filter, query]);
  if (!treatmentList) return <></>;
  return (
    <div
      style={{
        margin: "25px 35px",
        borderRadius: 5,
        padding: "10px 20px",
        overflowX: "auto",
      }}
    >
      <table>
        <thead>
          <tr>
            <th>Patient Name</th>
            <th>Treatment Catagory</th>
            <th>Diesease</th>
            <th>Completed on</th>
            <th>Practitioner</th>
            <th>Consultant</th>
            <th>Totalo cost</th>
            <th>Prescription issued</th>
          </tr>
        </thead>
        <tbody>
          {treatmentList.map((item) => (
            <tr>
              <td>{item.name}</td>
              <td>{item.catagory}</td>
              <td
                style={
                  item.disease.toLowerCase() === "allergy"
                    ? {
                        color: "red",
                        fontWeight: "bold",
                      }
                    : {}
                }
              >
                {item.disease}
              </td>
              <td>{item.date}</td>
              <td>{item.practitinoer}</td>
              <td>
                <ul>
                  {item.consultants.map((i) => (
                    <li>{i}</li>
                  ))}
                </ul>
              </td>
              <td>{item.cost}</td>
              <td>{item.issued}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
