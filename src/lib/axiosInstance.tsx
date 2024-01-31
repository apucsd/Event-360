import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://event-360-sigma.vercel.app",
});
