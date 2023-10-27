import axios from "axios";

export const publicRequest = axios.create({
  baseURL: "http://localhost:8000",
});

export const publicGet = (endPoints) => {
  return publicRequest.get(endPoints);
};

export const publicPost = (endPoints, data) => {
  return publicRequest.post(endPoints, data);
};

export const publicPut = (endPoints, id, data) => {
  return publicRequest.put(`${endPoints}/${id}`, data);
};

export const publicDelete = (endPoints, id) => {
  return publicRequest.delete(`${endPoints}/${id}`);
};
