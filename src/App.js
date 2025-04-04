import React from "react";

import "./App.css";
import "./controller.css";
import TemperatureController from "./components/TemperatureController";

function App() {
  return (
    <div className="App">
      <TemperatureController title="Living Room" minTemper={0} maxTemper={30} />
      <TemperatureController title="Bed Room" minTemper={8} maxTemper={25} />
    </div>
  );
}

export default App;
