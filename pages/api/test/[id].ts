import { assignments, Assignment } from "@/data/assignments";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  error?: string;
  data?: Assignment;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.setHeader("Access-Control-Allow-Origin", "*");

  const id = +(req.query.id as string);
  const sendError = Math.random() < 0.2;
  if (sendError) {
    res.status(500).json({ error: "Error" });
    return;
  }
  const assignment = assignments.find((assignment) => assignment.id === id);

  res.status(200).json({ data: assignment });
}
