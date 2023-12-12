import { getById, updateUser, deleteUser } from "../repositorys/user.repository";


//user validation

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

