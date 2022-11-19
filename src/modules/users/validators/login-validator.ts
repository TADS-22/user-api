import * as Yup from 'yup'

export const loginValidator = Yup.object({
  login: Yup.string().required('Login é obrigatório'),
  password: Yup.string().required('Senha é obrigatória'),
})
