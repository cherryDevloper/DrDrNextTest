export default function handler(req: any, res: any) {
  const { _page = 1, _limit = 5 } = req.query;
  const page = parseInt(_page, 10);
  const limit = parseInt(_limit, 10);

  const allData = Array.from({ length: 50 }, (_, index) => ({
    id: index + 1,
    name: `Drug ${index + 1}`,
  }));

  const start = (page - 1) * limit;
  const end = page * limit;

  res.setHeader("x-total-count", allData.length.toString());
  res.status(200).json(allData.slice(start, end));
}
