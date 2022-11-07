import { userRepository } from "../data/repository";
import { CreateUserDto } from "../dto";
import { createUserMapper } from "./mapper";

export const execute = async (data: CreateUserDto): Promise<void> => {
  const user = createUserMapper.mapToEntity(data)
  userRepository.save(user)
}
