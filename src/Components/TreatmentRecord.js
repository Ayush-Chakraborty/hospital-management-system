import React, { useEffect, useState } from "react";
import Fuse from "fuse.js";
import "./table.css";
import api from "../Api/treatment";
const dash = "--";
export default function TreatmentRecord({
  treatments,
  filter,
  query,
  fetchData,
}) {
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
  }, [filter, query, actualList, fuse]);
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
            <th>
              Treatment <br /> Catagory
            </th>
            <th>Diesease</th>
            <th>Completed on</th>
            <th>Practitioner</th>
            <th>Consultant</th>
            <th>Surgeons</th>
            <th>Total cost</th>
            <th>
              Prescription <br /> issued
            </th>
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
                {item.consultants.length > 0 ? (
                  <ul>
                    {item.consultants.map((i) => (
                      <li>{i}</li>
                    ))}
                  </ul>
                ) : (
                  dash
                )}
              </td>
              <td>
                {item.surgeons.length > 0 ? (
                  <ul>
                    {item.surgeons.map((i) => (
                      <li>{i}</li>
                    ))}
                  </ul>
                ) : (
                  dash
                )}
              </td>
              <td>
                {item.insurance_charge ? (
                  <>
                    <span style={{ fontWeight: "bold" }}>Base cost:&nbsp;</span>
                    {item.cost}
                    <br />
                    <span style={{ fontWeight: "bold" }}>
                      Insurance charges:&nbsp;
                    </span>
                    {item.insurance_charge}
                  </>
                ) : (
                  item.cost
                )}
              </td>
              <td
                style={
                  item.issued === "Yes"
                    ? {
                        fontWeight: "700",
                        color: "rgb(43, 107, 226)",
                      }
                    : {}
                }
              >
                {item.issued === "Yes" ? (
                  item.issued
                ) : (
                  <button
                    className="issue"
                    onClick={async () => {
                      await api.updateTreatment(
                        { ...item, issued: "Yes" },
                        () => {}
                      );
                      await fetchData();
                    }}
                  >
                    Issue
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
