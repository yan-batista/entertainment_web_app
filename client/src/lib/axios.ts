import axios from "axios";

const api = axios.create({
  baseURL: "https://entertainment-web-app-server-tau.vercel.app/api",
});

export default api;
