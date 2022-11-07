import { StatusCodes } from 'http-status-codes'
import { DefaultError } from "./default-error";

export class DatabaseError extends DefaultError {
  constructor(message: string) {
    super(message, StatusCodes.INTERNAL_SERVER_ERROR)
  }
}
