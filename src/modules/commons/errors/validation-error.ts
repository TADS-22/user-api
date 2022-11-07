import { StatusCodes } from "http-status-codes";
import { DefaultError } from "./default-error";

export class ValidationError extends DefaultError {
  constructor(message: string) {
    super(message, StatusCodes.UNPROCESSABLE_ENTITY)
  }
}
