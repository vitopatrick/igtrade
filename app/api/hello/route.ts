import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    return res.status(200).json({ key: process.env.WEBHOOK_SECRET });
  } else {
    return res.status(405).json({ error: `Method ${req.method} not allowed` });
  }
}
