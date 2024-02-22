import axios from "axios";
export const api = axios.create({
  baseURL:"https://api.openweathermap.org/data/2.5"
})
export const api_key ="67f4bc5f331d0c8246ccbcbe562ad3a8";