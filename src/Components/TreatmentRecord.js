import React from "react";
import "./table.css";
export default function TreatmentRecord() {
  return (
    <div
      style={{
        margin: "25px 35px",
        // display: "flex",
        // backgroundColor: "#D5F1D8",
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
            <th>Time duration</th>
            <th>Completed on</th>
            <th>Practitioner</th>
            <th>Consultant</th>
            <th>Totalo cost</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Atul Kumar</td>
            <td>Medicine</td>
            <td>Madness</td>
            <td>2 weeks</td>
            <td>5th sept</td>
            <td>Narendra</td>
            <td>
              <ul>
                <li>Doctor A</li>
                <li>Doctor B</li>
              </ul>
            </td>
            <td>Rs. 15000</td>
          </tr>
          <tr>
            <td>Atul Kumar</td>
            <td>Medicine</td>
            <td>Madness</td>
            <td>2 weeks</td>
            <td>5th sept</td>
            <td>Narendra</td>
            <td>
              <ul>
                <li>Doctor A</li>
                <li>Doctor B</li>
              </ul>
            </td>
            <td>Rs. 15000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
