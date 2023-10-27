import axios from "axios";

export const privateRequest = axios.create({
  baseURL: `http://localhost:8000`,
});

const requestHandler = (request) => {
  request.headers.Authorization =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.e";
  return request;
};
const requestErrorHandler = (error) => {
  return Promise.reject(error);
};

privateRequest.interceptors.request.use(
  (request) => requestHandler(request),
  (error) => requestErrorHandler(error)
);

const responseErrorHandler = (error) => {
  return Promise.reject(error);
};

privateRequest.interceptors.response.use(
  (response) => response,
  (error) => responseErrorHandler(error)
);

export const privateGet = (endPoints) => {
  return privateRequest.get(endPoints);
};

export const privatePost = (endPoints, data) => {
  return privateRequest.post(endPoints, data);
};

export const privatePut = (endPoints, id, data) => {
  return privateRequest.put(endPoints, id, data);
};

export const privateDelete = (endPoints, id) => {
  return privateRequest.delete(endPoints, id);
};
