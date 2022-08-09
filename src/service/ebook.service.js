import httpClient from "../http-common.js";

const getAll = () => {
  return httpClient.get("/ebooks");
};

const create = (data) => {
  return httpClient.post("/ebooks", data);
};

const get = (id) => {
  return httpClient.get(`/ebooks/${id}`);
};

const update = (id, data) => {
  return httpClient.put(`/ebooks/${id}`, data);
};

const remove = (id) => {
  return httpClient.delete(`/ebooks/${id}`);
};

const ebookAction = { getAll, get, create, update, remove };

export default ebookAction;
