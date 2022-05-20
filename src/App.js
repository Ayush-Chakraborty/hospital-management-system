import { useRef, useState, useEffect } from "react";
import "./App.css";
import Doctor from "./Screens/Doctor";
import NewTreatment from "./Screens/NewTreatment";
import Patient from "./Screens/Patient";
import api from "./Api/doctors";
import apiTreatmet from "./Api/treatment";
// import { CircularProgress } from "@mui/material";
// import Backdrop from "@mui/material/Backdrop";
function App() {
  const floatingDivRef = useRef();
  const [tab, setTab] = useState(1);
  // const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(false);
  const hide = async () => {
    setVisible(false);
    floatingDivRef.current.style.display = "none";
    await fetchData();
  };
  const show = () => {
    setVisible(true);
    floatingDivRef.current.style.display = "";
  };
  const [doctors, setDoctors] = useState([]);
  const [treatments, setTreatments] = useState([]);
  const fetchData = async () => {
    const data = await api.getDoctor();
    const data2 = await apiTreatmet.getTreatments();
    setDoctors(data);
    setTreatments(data2);
    // setLoading(false);
    // setTimeout(() => {
    // }, 2000);
  };
  useEffect(() => {
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
          <Patient
            show={show}
            setTab={setTab}
            treatments={treatments}
            fetchData={fetchData}
          />
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
            {visible && <NewTreatment doctors={doctors} hide={hide} />}
          </div>
        </>
      ) : (
        <Doctor setTab={setTab} doctors={doctors} fetchData={fetchData} />
      )}
    </div>
  );
}

export default App;
