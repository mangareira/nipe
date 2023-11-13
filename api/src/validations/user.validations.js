import * as yup from "yup"

export const userValidation = yup.object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    description: yup.string(),
    turma: yup.string(),
    periodo: yup.string(),
    //projetos: yup.array()
})
export const profValidation = yup.object({
    name: yup.string().required(),
    email: yup.string().required().email(),
    description: yup.string().required(),
})
export const disValidation = yup.object({
    name: yup.string().required(),
    email: yup.string().required().email(),
    description: yup.string().required(),
})
export const grupValidation = yup.object({
    tema: yup.string().required(),
    nameGrup: yup.string().required(),
    description: yup.string().required(),
})
export const uploadValidation = yup.object({
    nome: yup.string().required(),
    path: yup.string().required(),
    type: yup.string().required()
})