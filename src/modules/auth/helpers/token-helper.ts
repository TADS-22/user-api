import jwt from 'jsonwebtoken'
import { IAuthData } from "../../domain";

const TOKEN_KEY = "!@#$s1573m45-+==%"
const TOKEN_EXPIRATION_TIME = 600

export const createAuthToken = (payload: IAuthData): string => {
  return jwt.sign(payload, TOKEN_KEY,
    { subject: payload.userId, expiresIn: TOKEN_EXPIRATION_TIME })
}
