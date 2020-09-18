import axios from "axios";

const api = axios({
  baseURL: "https://api.github.com",
});

export default api;
