import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Contents from "./components/Contents";
function App() {

  return (
    
    <div>
      <Header />
      <NavBar />
      <Routes>
          <Route path="/" element={<Contents />}></Route>
          <Route path="/:genre" element={<Contents />}></Route>
      </Routes>
    </div>
  );
}

export default App;
