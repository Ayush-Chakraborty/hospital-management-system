import React, { useEffect, useRef, useState } from "react";
import "./form.css";
import api from "../Api/treatment";
export default function NewTreatment({ doctors, hide }) {
  const [payment, setPayment] = useState(true);
  const insurenceRef = useRef();
  const labelRef = useRef();
  const consultantRef = useRef();
  const surgeonRef = useRef();
  const nameRef = useRef();
  const catagoryRef = useRef();
  const diseaseRef = useRef();
  const dateRef = useRef();
  const practitinoerRef = useRef();
  const costRef = useRef();
  const [consultantList, setConsultantList] = useState([]);
  const [surgeonList, setSurgeonList] = useState([]);
  useEffect(() => {
    if (payment) {
      insurenceRef.current.style.display = "none";
      labelRef.current.style.display = "none";
    } else {
      labelRef.current.style.display = "";
      insurenceRef.current.style.display = "";
    }
  }, [payment]);

  const submitHandler = async () => {
    const newRecord = {
      name: nameRef.current.value,
      catagory: catagoryRef.current.value,
      disease: diseaseRef.current.value,
      date: dateRef.current.value,
      practitinoer: practitinoerRef.current.value,
      cost: costRef.current.value,
      issued: "No",
      consultants: consultantList,
      surgeons: surgeonList,
    };
    if (insurenceRef.current.value)
      newRecord.insurance_charge = insurenceRef.current.value;
    await api.createTreatment(newRecord, hide);
  };

  return (
    <form
      action="post"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div>
        <label htmlFor="name">Patient Name</label>
      </div>
      <input
        type="text"
        id="name"
        placeholder="Enter patient name"
        ref={nameRef}
      />
      <div>
        <label htmlFor="catagory">Catagory</label>
      </div>
      <select name="" id="" placeholder="Select Catagory" ref={catagoryRef}>
        <option value="Medicine">Medicine</option>
        <option value="Vaccination">Vaccination</option>
        <option value="Operation">Operation</option>
        <option value="Check up">Check up</option>
      </select>
      <div>
        <label htmlFor="disease">Disease</label>
      </div>
      <input
        type="text"
        id="disease"
        placeholder="Enter disease name"
        ref={diseaseRef}
      />
      <div>
        <label htmlFor="completion_date">Expected Completion Date</label>
      </div>
      <input type="date" id="completion_date" ref={dateRef} />
      <div>
        <label htmlFor="cost">Expected Cost</label>
      </div>
      <input type="number" id="cost" placeholder="Enter cost" ref={costRef} />
      <div>
        <label htmlFor="">Payment method</label>
      </div>
      <input
        type="radio"
        id="self_payment"
        name="payment"
        // checked={true}
        onChange={(event) => {
          if (event.target.value) setPayment(true);
        }}
      />
      <label htmlFor="self_payment" className="radioLabel">
        Self Payment
      </label>
      <br />
      <input
        type="radio"
        id="insurence_payment"
        name="payment"
        onChange={(event) => {
          if (event.target.value) setPayment(false);
        }}
      />
      <label htmlFor="insurence_payment" className="radioLabel">
        Payment through insurence
      </label>
      <div ref={labelRef}>
        <label htmlFor="insurence">Insurence Charges</label>
      </div>
      <input
        type="number"
        id="insurence"
        placeholder="Enter insurence surcharge"
        ref={insurenceRef}
      />

      <div>
        <label htmlFor="practitioner">Practitioner</label>
      </div>

      <select
        id="practitioners"
        placeholder="Select practitioner"
        ref={practitinoerRef}
      >
        {doctors &&
          doctors.practitinoer &&
          doctors.practitinoer.map((item) => (
            <option key={item.id}>{item.name}</option>
          ))}
      </select>
      <div>
        <label htmlFor="consultant">Consultants</label>
      </div>
      <select
        id="consultant"
        placeholder="Select consultants"
        ref={consultantRef}
      >
        {doctors &&
          doctors.consultant &&
          doctors.consultant.map((item) => (
            <option key={item.id}>{item.name}</option>
          ))}
      </select>
      <button
        className="add"
        onClick={() => {
          if (consultantRef.current.value.length > 0) {
            setConsultantList((prev) => [...prev, consultantRef.current.value]);
          }
        }}
      >
        Add
      </button>

      <div className="consultantList">
        {consultantList.map((consultant, index) => (
          <div
            onClick={() => {
              setConsultantList((prev) => {
                const newList = [];
                for (let c of prev) {
                  if (c !== consultant) newList.push(c);
                }
                return newList;
              });
            }}
            id={index}
          >
            {consultant} <span>X</span>
          </div>
        ))}
      </div>

      <select id="surgeon" placeholder="Select surgeons" ref={surgeonRef}>
        {doctors &&
          doctors.surgeon &&
          doctors.surgeon.map((item) => (
            <option key={item.id}>{item.name}</option>
          ))}
      </select>
      <button
        className="add"
        onClick={() => {
          if (surgeonRef.current.value.length > 0) {
            setSurgeonList((prev) => [...prev, surgeonRef.current.value]);
          }
        }}
      >
        Add
      </button>

      <div className="consultantList">
        {surgeonList.map((surgeon, index) => (
          <div
            onClick={() => {
              setSurgeonList((prev) => {
                const newList = [];
                for (let c of prev) {
                  if (c !== surgeon) newList.push(c);
                }
                return newList;
              });
            }}
            id={index}
          >
            {surgeon} <span>X</span>
          </div>
        ))}
      </div>
      <button className="submit" onClick={submitHandler}>
        Submit
      </button>
    </form>
  );
}
