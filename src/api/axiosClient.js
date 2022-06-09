import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://api-placeholder.herokuapp.com/api/v2",
  headers: { "content-type": "application/json" },
  // paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use((config) => {
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }

    return response;
  },
  (error) => {
    throw error;
  }
);

export default axiosClient;
