import axios from "axios";
import { getCookie } from "../auth/cookies";

// axios.defaults.headers["Access-Control-Allow-Origin"] = "*";
axios.defaults.withCredentials = true;
axios.defaults.headers.common["Referrer-Policy"] = "no-referrer-when-downgrade";
const token = getCookie("token");

const axiosConfig = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": "true",
    "Authorization": token ? token : ""
  },
  timeout: 30000
});

export default axiosConfig;