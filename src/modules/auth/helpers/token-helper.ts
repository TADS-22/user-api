import jwt from 'jsonwebtoken'
import { tokenEnv } from '../../commons/env';
import { IAuthData } from "../../domain";

export const createAuthToken = (payload: IAuthData): string => {
  return jwt.sign(payload, tokenEnv.key,
    { subject: payload.userId, expiresIn: tokenEnv.expirationTime })
}
