import React from "react";
import { Routes,Route } from "react-router-dom";
import { LoginPage } from "./components/loginPage";
import { Dashboardpage } from "./components/dashoardpage";
import Adduser from "./components/addEmployeeform";
export const HOST = 'http://localhost:8080'
function App() {
  return (
    <Routes>
      <Route path="/" element = {<LoginPage/>}/>
      <Route path="/Dashboard" element = {<Dashboardpage/>}/>
      <Route path="/Dashboard/adduser" element = {<Adduser/>}/>
    </Routes>
  );
}

export default App;
