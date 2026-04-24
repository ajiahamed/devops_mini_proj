import axios from "axios";

export const fetchMessage = async () => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/hello`);
    return res.data.message;
  } catch (err) {
    return "API not reachable";
  }
};
