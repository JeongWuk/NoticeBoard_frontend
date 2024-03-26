import axios from "axios";

const BASE_URL = "http://localhost:4000";

export const createAPI = async (data) => {
  console.log(data);
  try {
    const response = await axios.post(`${BASE_URL}/board/create`, data);
    return response.data;
  } catch (error) {
    throw new Error("Failed to create resource");
  }
};
