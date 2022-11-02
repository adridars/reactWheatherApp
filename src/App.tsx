import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import wheatherCaller from "./components/apiCaller";

function App() {
  console.log(wheatherCaller());
  return <div></div>;
}

export default App;
