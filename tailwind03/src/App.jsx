import React from "react";
import reactLogo from './assets/react.svg' 
import viteLogo from '/vite.svg' 
import './App.css'
import Card from "./components/card";
import Open from "./components/Open";

function App() {
  let myobj = {
    username: "Ankush Kumar",
    age:"20"
  }
  return (
    <>
    
    <div>
      <h1>Ankush Kumar</h1>
      <Card username="Ankit"/>
      <Card username="Ankush"/>
      <Open/>
    </div>
    
    </>
  );
}

export default App