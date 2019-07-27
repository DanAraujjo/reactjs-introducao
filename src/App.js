import React from "react";
import "./App.css";

import profile from "./assets/profile.jpeg";

import TechList from "./components/TechList";

function App() {
  return (
    //fragment
    <>
      <h1>Hello word</h1>
      <img width={100} src={profile} />;
      <TechList />
    </>
  );
}

export default App;
