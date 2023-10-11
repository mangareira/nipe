import * as yup from "yup"

export const userValidation = yup.object({
    name: yup.string().required(),
    email: yup.string().required().email(),
    description: yup.string().required(),
    turma: yup.string().required(),
    periodo: yup.string().required(),
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