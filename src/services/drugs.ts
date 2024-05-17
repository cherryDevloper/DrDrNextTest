import axios from "axios";

const API_URL = "http://localhost:4000";

export const fetchDrugs = async (page: number, pageSize: number) => {
  try {
    const response = await axios.get(`${API_URL}/drugs`, {
      params: {
        _page: page,
        _per_page: pageSize,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching drugs:", error);
    throw error;
  }
};
