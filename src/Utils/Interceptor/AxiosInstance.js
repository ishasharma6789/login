import axios from "axios";

const baseURL = "http://localhost:3001";

export let axiosInstance = null;

// Asynchronous initialization of the axios instance
export const initializeAxiosInstance = (store) => {
  // Create your axiosInstance with the store here
  axiosInstance = axios.create({
    baseURL,
  });
  // Use store in your interceptor here
  // Request interceptor
  axiosInstance.interceptors.request.use(
    (config) => {
      const state = store.getState();
      const token = state.auth2.token.accessToken;
      config.headers.Authorization = `Bearer ${token}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  // Response interceptor
  axiosInstance.interceptors.response.use(
    (response) => {
      console.log("Response Data hello:", response.data);
      return response;
    },
    (error) => {
      console.error("Response Error:", error);
      return Promise.reject(error);
    }
  );
};