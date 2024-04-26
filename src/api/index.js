import axios from "axios";

const BASE_URL = "http://localhost:4000";

export const createAPI = async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}/board/create`, data);
    return response.data;
  } catch (error) {
    throw new Error("Failed to create resource");
  }
};

export const getBoardListAPI = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/board/list`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to create resource");
  }
};

export const getBoardItemAPI = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/board/${id}`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to create resource");
  }
};

export const postUserInfoAPI = async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}/user/create`, data);
    return response.data;
  } catch (error) {
    throw new Error("Failed to post user info");
  }
};

export const checkUserInfoAPI = async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}/user/check`, data);
    return response;
  } catch (error) {
    throw new Error("Failed to check user info");
  }
};
