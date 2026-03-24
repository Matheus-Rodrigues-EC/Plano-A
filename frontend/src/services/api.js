import axios from "axios";

const axiosInstance = axios.create({
  // Em desenvolvimento, usa o proxy /api
  // Em produção, usa a variável de ambiente
  baseURL: import.meta.env.DEV ? "/api" : import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
