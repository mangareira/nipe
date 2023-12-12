import {uploadCreate, getAllUpload, getByIdUpload, updateUpload, deleteupload } from "../repositorys/user.repository";


//user validation
export const createUpload = async (req, res) => {
    try{
        const upload = await uploadCreate(req.body)
        res.status(200).send(upload)
    }catch (e) {
        res.status(400).send(e)
    }
}


export const getUpload = async (req,res) => {
    try{
        const users = await getAllUpload()
        res.status(200).send(users)
    }catch (e){
        res.status(400).send(e)
    }
}
export const getIdUpload = async (req, res) => {
    try{
        const user = await getByIdUpload(Number(req.params.id))
        res.status(200).send(user)
    }catch (e){
        res.status(400).send(e)
    }   
}

export const updateUpload = async (req, res) => {
    try{
        const user = await updateUpload(Number(req.params.id), req.body)
        res.status(200).send(user) 
    } catch (e) {
        res.status(400).send(e)
    }
}
export const removeUpload = async (req, res) => {
    try{
        await deleteupload(Number(req.params.id), req.body)
        res.status(200).send() 
    } catch (e) {
        res.status(400).send(e)
    }
}

