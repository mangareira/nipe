import { createGrup, getAllGrup, getByIdGrup, updateGrup, deleteGrup } from "../repositorys/user.repository";
import { grupValidation } from "../validations/user.validations";


//user validation
export const grupCreate = async (req, res) => {
    try{
        await grupValidation.validate(req.body)

        const grup = await createGrup(req.body)
        res.status(200).send(grup)
    }catch (e) {
        res.status(400).send(e)
    }
}


export const grupGet = async (req,res) => {
    try{
        const grup = await getAllGrup()
        res.status(200).send(grup)
    }catch (e){
        res.status(400).send(e)
    }
}
export const grupGetId = async (req, res) => {
    try{
        const grup = await getByIdGrup(Number(req.params.id))
        res.status(200).send(grup)
    }catch (e){
        res.status(400).send(e)
    }   
}

export const grupUpdate = async (req, res) => {
    try{
        const grup = await updateGrup(Number(req.params.id), req.body)
        res.status(200).send(grup) 
    } catch (e) {
        res.status(400).send(e)
    }
}
export const grupRemove = async (req, res) => {
    try{
        await deleteGrup(Number(req.params.id), req.body)
        res.status(200).send() 
    } catch (e) {
        res.status(400).send(e)
    }
}

