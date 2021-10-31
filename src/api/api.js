import axios from "axios";

export const apiUrl = axios.create({
  baseURL: `https://616dfd65a83a850017caa7c1.mockapi.io/`,
});

export const endpoint = {
  cities: `cities/`,
};
