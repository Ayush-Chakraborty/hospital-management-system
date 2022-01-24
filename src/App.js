import { useRef } from "react";
import "./App.css";
import NewTreatment from "./Screens/NewTreatment";
import Patient from "./Screens/Patient";

function App() {
  const floatingDivRef = useRef();
  const hide = () => {
    floatingDivRef.current.style.display = "none";
  };
  const show = () => {
    floatingDivRef.current.style.display = "";
  };
  return (
    <div
      className="App"
      style={{
        width: "100vw",
      }}
    >
      <Patient show={show} />
      <div className="floating_div" ref={floatingDivRef}>
        <div className="floating_heading">
          <h1>Create New Treatment</h1>
          <h1 className="close" onClick={hide}>
            X
          </h1>
        </div>

        <NewTreatment />
      </div>
    </div>
  );
}

export default App;
