import * as Yup from 'yup'

export const createUserValiator = Yup.object({
  name: Yup.string().required('Nome do usuário é obrigatório'),
  login: Yup.string().required('Login é obrigatório'),
  password: Yup.string()
    .required('Senha é obrigatória')
    .min(6, 'Senha deve possuir ao menos 6 caracteres')
    .max(10, 'Senha deve possuir no máximo 10 caracteres')
})
