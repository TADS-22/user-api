import { NextFunction, Request, Response } from "express";
import * as Yup from 'yup'
import { ValidationError } from "../../errors";
import { apiLogger } from "../../logger";

export const requestBodyValidator = (schema: Yup.AnyObjectSchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validate(req.body)
      next()
    } catch (error: Error | any) {
      apiLogger.error(error.message, {
        local: 'request-body-validator',
        method: 'requestBodyValidator',
        exception: error.message,
      })

      throw new ValidationError(error.message)
    }
  }

