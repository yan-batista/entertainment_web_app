import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api/",
  /* baseURL: "https://entertainment-web-app-server-tau.vercel.app/api", */
});

export default api;
