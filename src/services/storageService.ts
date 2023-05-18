import axios from "axios";

const API_KEY = "<YOUR_JSONBIN_API_KEY>"; // replace with your actual API key
const BIN_ID = "<YOUR_JSONBIN_BIN_ID>"; // replace with your actual bin ID

const api = axios.create({
  baseURL: "https://api.jsonbin.io/v3",
  headers: {
    "X-Master-Key": API_KEY,
    "Content-Type": "application/json",
  },
});

export const readData = async () => {
  try {
    const response = await api.get(`/b/${BIN_ID}/latest`);
    return response.data.record;
  } catch (error) {
    console.error("Error reading data from jsonbin:", error);
    throw error;
  }
};

export const writeData = async (data: any) => {
  try {
    const response = await api.put(`/b/${BIN_ID}`, data);
    return response.data;
  } catch (error) {
    console.error("Error writing data to jsonbin:", error);
    throw error;
  }
};
