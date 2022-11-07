import { Response } from "express";
import { StatusCodes } from "http-status-codes";

export const ok = <T>(res: Response, content: T) => {
  res.status(StatusCodes.OK)
  res.json(content)
}

export const notFound = <T>(res: Response, content: T) => {
  res.status(StatusCodes.NOT_FOUND)
  res.json(content)
}

export const created = (res: Response) => {
  res.status(StatusCodes.CREATED)
  res.end()
}

export const empty = (res: Response) => {
  res.status(StatusCodes.NO_CONTENT)
  res.end()
}

export const okOrEmpty = <T>(res: Response, content: T) => {
  if (content) {
    ok(res, content)
    return
  }

  empty(res)
}