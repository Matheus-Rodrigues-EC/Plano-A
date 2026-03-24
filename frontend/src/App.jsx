import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import React, { useEffect } from "react";
import { Col } from "antd";
// import { useState } from 'react'
import Home from "./pages/Home";
import CreateEvent from "./pages/CreateEvent";
import EventsList from "./pages/EventsList";
import EditEvent from "./pages/EditEvent";

function App() {
  // const [count, setCount] = useState(0)
  useEffect(() => {}, []);

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<Home />} />
      <Route path="/events" element={<EventsList />} />
      <Route path="/events/create" element={<CreateEvent />} />
      <Route path="/events/edit/:id" element={<EditEvent />} />
    </Routes>
  );
}

export default App;
