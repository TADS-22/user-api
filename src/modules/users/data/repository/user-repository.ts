import { DatabaseError } from "../../../commons/errors";
import { apiLogger } from "../../../commons/logger";
import { IUser } from "../../../domain";
import { database } from "../../../infra/database";
import { User } from "../entity";

export const save = async (data: IUser): Promise<void> => {
  try {
    const con = await database.connect()
    const user = new User(data)

    await user.save()
    con.disconnect()
  } catch (error: Error | any) {
    apiLogger.error("Error creating user", {
      local: 'user-repository',
      method: 'save',
      exception: error.message,
    })

    throw new DatabaseError("Error creating user")
  }
}

export const findByLogin = async (login: string): Promise<IUser | null> => {
  try {
    const con = await database.connect()
    const user = await User.findOne({ login })

    con.disconnect()

    return user
  } catch (error: Error | any) {
    apiLogger.error("Error finding user by login", {
      local: 'user-repository',
      method: 'findByLogin',
      exception: error.message,
    })

    throw new DatabaseError("Error finding user by login")
  }
}
