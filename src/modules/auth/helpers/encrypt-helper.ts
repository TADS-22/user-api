import bcrypt from 'bcrypt'
import { encryptEnv } from '../../commons/env';

export const encrypt = (data: string): string => {
  return bcrypt.hashSync(data, encryptEnv.salt);
}

export const compare = (source: string, target: string): boolean => {
  return bcrypt.compareSync(source, target)
}
