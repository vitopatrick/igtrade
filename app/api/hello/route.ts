import { NextApiRequest, NextApiResponse } from "next";

export async function GET(req: Request, res: NextApiResponse) {
  let uri: any = process.env.WEBHOOK_SECRET;

  res.status(200).json({
    uri,
  });
}