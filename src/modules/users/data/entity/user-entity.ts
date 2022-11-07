import { model, Schema } from "mongoose";
import { IUser } from "../../../domain";

const userSchema = new Schema<IUser>({
  login: { type: String, },
  password: { type: String },
  name: { type: String },
})

export const User = model<IUser>('user', userSchema)
