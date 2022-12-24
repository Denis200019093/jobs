import axios, { AxiosRequestConfig } from "axios";

const instance = axios.create({
  baseURL: "http://localhost:4444",
});

instance.interceptors.request.use((config: AxiosRequestConfig) => {
  (config.headers ??= {}).Authorization = window.localStorage.getItem('token')
  return config
})

export default instance
