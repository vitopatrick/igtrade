import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message: string;
  data: any;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === "GET") {
    return res.status(200).json({
      message: "Hello from Next.js!",
      data: process.env.WEBHOOK_SECRET,
    });
  }
    
}
