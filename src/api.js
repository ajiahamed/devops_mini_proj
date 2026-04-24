import axios from "axios";

export const fetchMessage = async () => {
  try {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/hello`);
    return res.data.message;
  } catch {
    return "API not reachable";
  }
};
