import { Request, Response } from "express";
import { responseBuilder } from "../../commons/http";
import { createUserUseCase, loginUseCase } from "../use-cases";

export const save = async (req: Request, res: Response) => {
  await createUserUseCase.execute(req.body)
  responseBuilder.created(res)
}

export const login = async (req: Request, res: Response) => {
  const result = await loginUseCase.execute(req.body)
  responseBuilder.ok(res, result)
}
