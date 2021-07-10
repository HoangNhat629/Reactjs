import axios from "axios";

const API = axios.create({
  baseURL: "http://codedidungso.me:4000/api/v1",
});

export default API;
