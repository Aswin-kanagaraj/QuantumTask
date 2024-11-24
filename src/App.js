import React from "react";
import { Routes,Route } from "react-router-dom";
import { LoginPage } from "./components/loginPage";
import { Dashboardpage } from "./components/dashoardpage";
function App() {
  return (
    <Routes>
      <Route path="/" element = {<LoginPage/>}/>
      <Route path="/Dashboard" element = {<Dashboardpage/>}/>
    </Routes>
  );
}

export default App;
