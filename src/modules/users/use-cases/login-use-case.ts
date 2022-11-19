import { encryptHelper, tokenHelper } from "../../auth/helpers";
import { AuthError } from "../../commons/errors";
import { apiLogger } from "../../commons/logger";
import { userRepository } from "../data/repository";
import { LoginDto, LoginResultDto } from "../dto";
import { loginMapper } from "./mapper";

const buildLoginError = (): AuthError => {
  const authError = new AuthError('Dados inválidos para o login')
  apiLogger.error('Dados inválidos para o login', {
    exception: authError.message,
    local: 'loginUseCase',
    method: 'execute'
  })

  return authError
}

export const execute = async (loginData: LoginDto): Promise<LoginResultDto> => {
  const user = await userRepository.findByLogin(loginData.login);

  if (!user) {
    throw buildLoginError();
  }

  if (!encryptHelper.compare(loginData.password, user.password)) {
    throw buildLoginError();
  }

  const payload = loginMapper.mapToAuthData(user)
  const token = tokenHelper.createAuthToken(payload)

  return loginMapper.mapToResult(token)
}
