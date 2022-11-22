import dotenv from 'dotenv'
import path from 'path'

if (process.env.NODE_ENV === 'test') {
  dotenv.config({ path: path.resolve(__dirname, '../.env.test')})
} else {
  dotenv.config()
}

export const databaseEnv = {
  server: process.env.DATABASE_SERVER ?? "",
  port: process.env.DATABASE_PORT ?? "",
  name: process.env.DATABASE_NAME ?? "",
}

export const encryptEnv = {
  salt: parseInt(process.env.ENCRYPT_SALT ?? "10"),
}

export const tokenEnv = {
  key: process.env.TOKEN_KEY ?? "",
  expirationTime: process.env.TOKEN_EXPIRATION_TIME ?? "",
}