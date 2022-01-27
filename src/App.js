import { useRef, useState, useEffect } from "react";
import "./App.css";
import Doctor from "./Screens/Doctor";
import NewTreatment from "./Screens/NewTreatment";
import Patient from "./Screens/Patient";
import api from "./Api/doctors";
import apiTreatmet from "./Api/treatment";

function App() {
  const floatingDivRef = useRef();
  const [tab, setTab] = useState(1);
  const hide = () => {
    floatingDivRef.current.style.display = "none";
  };
  const show = () => {
    floatingDivRef.current.style.display = "";
  };
  const [doctors, setDoctors] = useState([]);
  const [treatments, setTreatments] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await api.getDoctor();
      const data2 = await apiTreatmet.getTreatments();
      setDoctors(data);
      setTreatments(data2);
    };
    fetchData();
  }, []);

  return (
    <div
      className="App"
      style={{
        width: "100vw",
      }}
    >
      {tab === 1 ? (
        <>
          <Patient show={show} setTab={setTab} treatments={treatments} />
          <div
            className="floating_div"
            ref={floatingDivRef}
            style={{
              display: "none",
            }}
          >
            <div className="floating_heading">
              <h1>Create New Treatment</h1>
              <h1 className="close" onClick={hide}>
                X
              </h1>
            </div>
            <NewTreatment doctors={doctors} hide={hide} />
          </div>
        </>
      ) : (
        <Doctor setTab={setTab} doctors={doctors} />
      )}
    </div>
  );
}

export default App;
