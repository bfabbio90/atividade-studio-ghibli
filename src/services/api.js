import axios from "axios";

export const BASE_URL = "https://ghibliapi.vercel.app/films";

export const api = axios.create({
  baseURL: BASE_URL,
});
