import { createDis, getAllDis, getByIdDis, updateDIs, deleteDis } from "../repositorys/user.repository";
import { disValidation } from "../validations/user.validations";


//user validation
export const disCreate = async (req, res) => {
    try{
        await disValidation.validate(req.body)

        const dis = await createDis(req.body)
        res.status(200).send(dis)
    }catch (e) {
        res.status(400).send(e)
    }
}


export const disGet = async (req,res) => {
    try{
        const dis = await getAllDis()
        res.status(200).send(dis)
    }catch (e){
        res.status(400).send(e)
    }
}
export const disGetId = async (req, res) => {
    try{
        const dis = await getByIdDis(Number(req.params.id))
        res.status(200).send(dis)
    }catch (e){
        res.status(400).send(e)
    }   
}

export const disUpdate = async (req, res) => {
    try{
        const dis = await updateDIs(Number(req.params.id), req.body)
        res.status(200).send(dis) 
    } catch (e) {
        res.status(400).send(e)
    }
}
export const disRemove = async (req, res) => {
    try{
        await deleteDis(Number(req.params.id), req.body)
        res.status(200).send() 
    } catch (e) {
        res.status(400).send(e)
    }
}

