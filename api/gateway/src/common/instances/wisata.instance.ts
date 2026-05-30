import axios, { AxiosInstance } from 'axios';

// Membuat instansiasi Axios khusus untuk layanan Wisata
export const wisataAxiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.WISATA_SERVICE_URL || 'http://localhost:3001', // Sesuaikan URL Microservice Wisata Anda
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

wisataAxiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
);
