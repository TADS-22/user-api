import { IAuthData, IUser } from "../../../domain";
import { LoginResultDto } from "../../dto";

export const mapToAuthData = (user: IUser): IAuthData => {
  return { 
    userId: user._id?.toString() ?? '',
    userLogin: user.login,
    userName: user.name,
  }
}

export const mapToResult = (token: string): LoginResultDto => {
  return { token }
}
