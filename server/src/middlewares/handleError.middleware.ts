import { ApiError } from "../errors/api.error";
import { Request, Response } from "express";

const handleErrorMiddleware = async (
  error: Error & Partial<ApiError>,
  req: Request,
  res: Response
) => {
  const statusCode = error.statusCode ?? 500;
  const message = error.statusCode ? error.message : "Interval server error";
  return res.status(statusCode).json({ message });
};

export { handleErrorMiddleware };
