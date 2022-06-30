import axios from "axios";

const PORT = 4000;

const instance = axios.create({
  baseURL: `http://localhost:${PORT}`,
});

export default instance;
