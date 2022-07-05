import React from "react";
import "./App.css";
import {Routes, Route } from 'react-router-dom';
import PageThree from "./Pages/PageThree";
import PageOne from "./Pages/PageOne";
import PageTwo from "./Pages/PageTwo";
import LandingPage from "./Pages/LandingPage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage/>} />
      <Route path="/pageOne" element={<PageOne/>}/>
      <Route path="/pageTwo" element={<PageTwo/>}/>
      <Route path="/pageThree" element={<PageThree/>}/>
    </Routes>
  )
}

export default App;
