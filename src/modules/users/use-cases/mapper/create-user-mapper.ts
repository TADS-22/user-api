import { IUser } from "../../../domain";
import { CreateUserDto } from "../../dto";

export const mapToEntity = (input: CreateUserDto): IUser => {
  return {
    name: input.name,
    login: input.login,
    password: input.password,
  }
}