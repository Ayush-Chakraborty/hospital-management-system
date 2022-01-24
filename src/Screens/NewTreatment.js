import React, { useEffect, useRef, useState } from "react";
import "./form.css";
export default function NewTreatment() {
  const [payment, setPayment] = useState(true);
  const insurenceRef = useRef();
  const labelRef = useRef();
  const consultantRef = useRef();
  const [consultantList, setConsultantList] = useState(["consultant"]);
  useEffect(() => {
    if (payment) {
      insurenceRef.current.style.display = "none";
      labelRef.current.style.display = "none";
    } else {
      labelRef.current.style.display = "";
      insurenceRef.current.style.display = "";
    }
  }, [payment]);

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
      <input type="text" id="name" placeholder="Enter patient name" />
      <div>
        <label htmlFor="disease">Disease</label>
      </div>
      <input type="text" id="disease" placeholder="Enter disease name" />
      <div>
        <label htmlFor="completion_date">Expected Completion Date</label>
      </div>
      <input type="date" id="completion_date" />
      <div>
        <label htmlFor="cost">Expected Cost</label>
      </div>
      <input type="number" id="cost" placeholder="Enter cost" />
      <div>
        <label htmlFor="">Payment method</label>
      </div>
      <input
        type="radio"
        id="self_payment"
        name="payment"
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
        <label htmlFor="insurence">Insurence Company</label>
      </div>
      <input
        type="search"
        id="insurence"
        placeholder="Enter insurence company name"
        ref={insurenceRef}
      />

      <div>
        <label htmlFor="practitioner">Practitioner</label>
      </div>
      <input
        id="practitioner"
        placeholder="Select practitioner"
        list="practitioners"
      />
      <datalist id="practitioners">
        <option value="Practitioner 1"></option>
        <option value="Practitioner 2"></option>
      </datalist>
      <div>
        <label htmlFor="consultant">Consultants</label>
      </div>
      <input
        id="consultant"
        placeholder="Select consultants"
        list="consultants"
        ref={consultantRef}
      />
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
      <datalist id="consultants">
        <option value="Consultants 1"></option>
        <option value="Consultants 2"></option>
      </datalist>
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
      <button className="submit">Submit</button>
    </form>
  );
}
