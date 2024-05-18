import axios from "axios";

// const API_URL = "http://localhost:4000";
export async function fetchDrugs(page: number, limit: number) {
  const apiUrl = `http://localhost:4000/drugs?_page=${page}&_per_page=${limit}`;

  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(
        "Axios error fetching drugs:",
        error.response?.data || error.message
      );
      throw new Error(
        `Failed to fetch drugs: ${
          error.response?.data?.message || error.message
        }`
      );
    } else {
      console.error("Unexpected error fetching drugs:", error);
      throw new Error("Unexpected error fetching drugs");
    }
  }
}
