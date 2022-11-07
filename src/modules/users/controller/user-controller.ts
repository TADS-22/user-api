import { Request, Response } from "express";
import { responseBuilder } from "../../commons/http";
import { createUserUseCase } from "../use-cases";

export const save = async (req: Request, res: Response) => {
  await createUserUseCase.execute(req.body)
  responseBuilder.created(res)
}
