import axios from "axios";

const api = axios.create({
  baseURL: "https://d32neyt9p9wyaf.cloudfront.net/api/v3",
});


export default api;
