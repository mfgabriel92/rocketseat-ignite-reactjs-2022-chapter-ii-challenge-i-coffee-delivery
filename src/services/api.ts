import axios from "axios";

const api = axios.create({
  baseURL: "https://coffee-delivery-challenge.free.beeceptor.com",
});

export default api;
