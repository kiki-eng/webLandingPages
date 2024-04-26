import axios from "axios";
export default function apiHandler() {
  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
    ...{
      headers: {
        "Access-Control-Allow-Origin": "*",
        "pub-access-key": process.env.REACT_APP_PUBLIC_ACCESS_KEY,
      },
    },
  });

  return axiosInstance;
}
