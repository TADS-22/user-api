import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { DefaultError } from "../../errors";

export const errorHandler = (error: Error, req: Request, res: Response, next: NextFunction) => {
  let status: number;

  if (error instanceof DefaultError) {
    status = error.status
  } else {
    status = StatusCodes.INTERNAL_SERVER_ERROR
  }

  res.status(status)
  res.json({ message: error.message })
}
