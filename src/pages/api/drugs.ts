import { fetchDrugs } from "@/services/drugs";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { _page = 1, _per_page = 5 } = req.query;
  const page = parseInt(_page as string, 10);
  const limit = parseInt(_per_page as string, 10);

  try {
    console.log(`Fetching drugs for page: ${page}, limit: ${limit}`);
    const data = await fetchDrugs(page, limit);
    console.log(`Fetched drugs data: ${JSON.stringify(data)}`);
    // res.setHeader("x-total-count", data.length.toString());
    res.status(200).json(data);
  } catch (error: any) {
    console.error("Error fetching drugs:", error.message);
    res.status(500).json({ error: error.message || "Failed to fetch drugs" });
  }
}
