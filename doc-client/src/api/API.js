import axios from "axios";
import endpoints from "./endpoints";

const API = axios.create({
  baseURL: endpoints?.serverBaseURL + "/api",
});

export default API;
