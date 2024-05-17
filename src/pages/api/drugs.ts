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
    const data = await fetchDrugs(page, limit);
    res.setHeader("x-total-count", data.length.toString());
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch drugs" });
  }
}
