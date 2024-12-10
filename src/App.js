import React from "react";
import "./App.css";
import Periodic from "./components/Periodic";
import Lanthanoids from "./components/Lanthanoids";
import Actinoids from "./components/Actionoids";
import JSBackground from "./components/JSBackground";
import Trends from "./components/Trends";
import NavBar from "./components/Navbar";

function App() {
  return (
    <div className="flex flex-col" style={{ position: "relative", zIndex: 0 }}>
      <JSBackground />
      <div style={{ position: "relative", zIndex: 1 }}>
        <NavBar />
        <Periodic />
        <Lanthanoids />
        <Actinoids />
      </div>
      <Trends />
    </div>
  );
}

export default App;
