import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import CreateEvent from "../pages/CreateEvent";
import EventsList from "../pages/EventsList";
import EditEvent from "../pages/EditEvent";

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<Home />} />
      <Route path="/events" element={<EventsList />} />
      <Route path="/events/create" element={<CreateEvent />} />
      <Route path="/events/edit/:id" element={<EditEvent />} />
    </Routes>
  );
};

export default RoutesComponent;
