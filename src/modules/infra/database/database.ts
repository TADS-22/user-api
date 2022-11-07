import mongoose, { Mongoose } from "mongoose";
import { apiLogger } from "../../commons/logger";
import { DatabaseError } from "../../commons/errors";

import '../../users/data/entity'

export const connect = async (): Promise<Mongoose> => {
  try {
    const con = await mongoose.connect("mongodb://localhost:27017/db-users")
    return con
  } catch (error: Error | any) {
    apiLogger.error("Error connecting to database", {
      local: 'database.connect',
      method: 'connect',
      exception: error.message,
    })

    throw new DatabaseError("Error connecting to database")
  }
}
