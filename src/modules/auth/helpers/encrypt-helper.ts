import bcrypt from 'bcrypt'

const ENCRYPT_SALT = 10

export const encrypt = (data: string): string => {
  return bcrypt.hashSync(data, ENCRYPT_SALT);
}

export const compare = (source: string, target: string): boolean => {
  return bcrypt.compareSync(source, target)
}
