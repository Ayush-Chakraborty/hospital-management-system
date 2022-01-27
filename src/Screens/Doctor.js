import React, { useState, useRef, useEffect } from "react";
import api from "../Api/doctors";
import CreateNew from "../Components/CreateNew";
import Header from "../Components/Header";
import "./doctor.css";
export default function Doctor({ setTab, doctors }) {
  const [practitioner, setPractitioner] = useState(false);
  const [surgeon, setSurgeon] = useState(false);
  const [consultant, setConsultant] = useState(false);
  const [practitionerList, setPractitionerList] = useState([]);
  const [surgeonList, setSurgeonList] = useState([]);
  const [consultantList, setConsultantList] = useState([]);
  const practitionerRef = useRef();
  const surgeonRef = useRef();
  const consultantRef = useRef();
  useEffect(() => {
    if (!doctors) return;
    setPractitionerList(doctors.practitinoer);
    setConsultantList(doctors.consultant);
    setSurgeonList(doctors.surgeon);
  }, [doctors]);
  return (
    <div
      style={{
        width: "100%",
      }}
    >
      <Header index={1} setTab={setTab} />
      <div
        style={{
          margin: "25px 35px",
          borderRadius: 5,
          padding: "10px 20px",
          overflowX: "auto",
          display: "flex",
          gap: 30,
          flexWrap: "wrap",
          flexGrow: 1,
          justifyContent: "center",
        }}
        className="doctor"
      >
        <div>
          <table>
            <thead>
              <tr>
                <th>Practitioner</th>
              </tr>
            </thead>
            <tbody>
              {practitionerList.map((item, index) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                </tr>
              ))}
              {practitioner && (
                <tr className="lastRow">
                  <td>
                    <input
                      type="text"
                      placeholder="Enter Practitioner Name"
                      ref={practitionerRef}
                    />
                    <div className="btn">
                      <button
                        className="add"
                        onClick={async () => {
                          setPractitioner(false);
                          await api.createDoctor(
                            1,
                            practitionerRef.current.value,
                            setPractitionerList((prev) => [
                              ...prev,
                              {
                                id: Date.now(),
                                name: practitionerRef.current.value,
                              },
                            ])
                          );
                        }}
                      >
                        Add
                      </button>
                      <button
                        className="add"
                        onClick={() => {
                          setPractitioner(false);
                        }}
                      >
                        Cancel
                      </button>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          <CreateNew
            onClick={() => {
              setPractitioner(true);
            }}
          />
        </div>
        <div>
          <table>
            <thead>
              <tr>
                <th>Surgeon</th>
              </tr>
            </thead>
            <tbody>
              {surgeonList.map((item, index) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                </tr>
              ))}
              {surgeon && (
                <tr className="lastRow">
                  <td>
                    <input
                      type="text"
                      placeholder="Enter Surgeon Name"
                      ref={surgeonRef}
                    />
                    <div className="btn">
                      <button
                        className="add"
                        onClick={async () => {
                          setSurgeon(false);
                          await api.createDoctor(
                            2,
                            surgeonRef.current.value,
                            setSurgeonList((prev) => [
                              ...prev,
                              {
                                id: Date.now(),
                                name: surgeonRef.current.value,
                              },
                            ])
                          );
                        }}
                      >
                        Add
                      </button>
                      <button
                        className="add"
                        onClick={() => {
                          setSurgeon(false);
                        }}
                      >
                        Cancel
                      </button>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          <CreateNew
            onClick={() => {
              setSurgeon(true);
            }}
          />
        </div>
        <div>
          <table>
            <thead>
              <tr>
                <th>Consultant</th>
              </tr>
            </thead>
            <tbody>
              {consultantList.map((item, index) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                </tr>
              ))}
              {consultant && (
                <tr className="lastRow">
                  <td>
                    <input
                      type="text"
                      placeholder="Enter Surgeon Name"
                      ref={consultantRef}
                    />
                    <div className="btn">
                      <button
                        className="add"
                        onClick={async () => {
                          setConsultant(false);
                          await api.createDoctor(
                            3,
                            consultantRef.current.value,
                            setConsultantList((prev) => [
                              ...prev,
                              {
                                id: Date.now(),
                                name: consultantRef.current.value,
                              },
                            ])
                          );
                        }}
                      >
                        Add
                      </button>
                      <button
                        className="add"
                        onClick={() => {
                          setConsultant(false);
                        }}
                      >
                        Cancel
                      </button>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          <CreateNew
            onClick={() => {
              setConsultant(true);
            }}
          />
        </div>
      </div>
    </div>
  );
}
