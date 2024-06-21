import { NextApiRequest, NextApiResponse } from "next";

export async function GET(res: NextApiResponse) {
  let uri: any = process.env.WEBHOOK_SECRET;

  return res.status(200).json({
   uri,
 });
}