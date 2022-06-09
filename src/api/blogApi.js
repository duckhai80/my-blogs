import axiosClient from "./axiosClient.js";

const blogApi = {
  getAll: (params) => {
    const url = "/blogs";
    return axiosClient.get(url, { params });
  },

  get: (id) => {
    const url = `/blogs/${id}`;
    return axiosClient.get(url);
  },

  create: (params) => {
    const url = `/blogs`;
    return axiosClient.post(url, params);
  },

  delete: (id) => {
    const url = `/blogs/${id}`;
    return axiosClient.delete(url, id);
  },

  update: (params) => {
    const url = `/blogs/${params.id}`;
    return axiosClient.put(url, params.formData);
  },
};

export default blogApi;
