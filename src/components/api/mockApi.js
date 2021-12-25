import axios from "axios";

export default axios.create({
  baseURL: "https://61c7056190318500175472c2.mockapi.io/",
});

export const fetchData = async () => {
  const data = await axios.get(
    "https://61c7056190318500175472c2.mockapi.io/VideoGamesStore"
  );
  return data.data;
};
