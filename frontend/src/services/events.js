import { api } from "./api";

export async function getEvents() {
  const response = await api.get("/events");
  return response.data;
}

export async function getEventById(id) {
  const response = await api.get(`/events/${id}`);
  return response.data;
}

export async function createEvent(payload) {
  const response = await api.post("/events", payload);
  return response.data;
}

export async function updateEvent(id, payload) {
  const response = await api.patch(`/events/${id}`, payload);
  return response.data;
}

export async function deleteEvent(id) {
  const response = await api.delete(`/events/${id}`);
  return response.data;
}
