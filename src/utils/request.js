import axios from "axios";

const request = axios.create({
  baseURL: './api',
  withCredentials: true,
  timeout: 20000,
})

// request.interceptors.request.use(
//   config => {
//     {
//
//     }
//   }
// )

