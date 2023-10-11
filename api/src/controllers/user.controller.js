import { createUser, getAll, getById, updateUser, deleteUser } from "../repositorys/user.repository";
import { userValidation } from "../validations/user.validations";


//user validation
export const create = async (req, res) => {
    try{
        await userValidation.validate(req.body)

        const user = await createUser(req.body)
        res.status(200).send(user)
    }catch (e) {
        res.status(400).send(e)
    }
}


export const get = async (req,res) => {
    try{
        const users = await getAll()
        res.status(200).send(users)
    }catch (e){
        res.status(400).send(e)
    }
}
export const getId = async (req, res) => {
    try{
        const user = await getById(Number(req.params.id))
        res.status(200).send(user)
    }catch (e){
        res.status(400).send(e)
    }   
}

export const update = async (req, res) => {
    try{
        const user = await updateUser(Number(req.params.id), req.body)
        res.status(200).send(user) 
    } catch (e) {
        res.status(400).send(e)
    }
}
export const remove = async (req, res) => {
    try{
        await deleteUser(Number(req.params.id), req.body)
        res.status(200).send() 
    } catch (e) {
        res.status(400).send(e)
    }
}

