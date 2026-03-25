import axiosInstance from "./api";

const api = axiosInstance;

export async function getEvents() {
  const response = await api.get("/event");
  return response.data;
}

export async function getEventById(id) {
  const response = await api.get(`/event/${id}`);
  return response.data;
}

export async function createEvent(data) {
  const response = await api.post("/event", data);
  return response.data;
}

export async function updateEvent(id, data) {
  const response = await api.patch(`/event/${id}`, data);
  return response.data;
}

export async function deleteEvent(id) {
  const response = await api.delete(`/event/${id}`);
  return response.data;
}
