import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Email } from "./components/Email/Email";
import VerticalLinearStepper from "./components/Stepper/Stepper";

function App() {
  return (
    <div className="App">
      <VerticalLinearStepper />
    </div>
  );
}

export default App;
