import { Assignment, assignments } from "@/data/assignments";
import type { NextApiRequest, NextApiResponse } from "next";

type SimpleAssignment = Pick<Assignment, "id" | "subtitle" | "startDatetime">;
type Data = {
  error?: string;
  data?: SimpleAssignment[];
};

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.setHeader("Access-Control-Allow-Origin", "*");

  const sendError = Math.random() < 0.1;
  if (sendError) {
    res.status(500).json({ error: "Error" });
    return;
  }

  res.status(200).json({
    data: assignments.map((assignment) => ({
      id: assignment.id,
      subtitle: assignment.subtitle,
      startDatetime: assignment.startDatetime,
    })),
  });
}
