import axios from "axios";
export const DOMAIN = 'http://127.0.0.1:8000/api/products';
export const http = axios.create({
    baseURL: DOMAIN,
})