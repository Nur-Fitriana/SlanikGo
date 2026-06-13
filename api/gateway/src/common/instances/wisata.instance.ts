import axios, { AxiosInstance } from 'axios';

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
  (error: unknown) => {
    if (error instanceof Error) {
      return Promise.reject(error);
    }

    return Promise.reject(
      new Error(typeof error === 'string' ? error : 'Wisata Service Error'),
    );
  },
);
