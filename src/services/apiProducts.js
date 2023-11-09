import axios from "axios";

export function getAllProducts(limit = 5) {
  return axios.get(`https://dummyjson.com/producs?limit=${limit}`);
}

export function getSingleProducts(id = 1) {
  return axios.get(`https://dummyjson.com/products/${id}`);
}
