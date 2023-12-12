import { getByIdDis, updateDIs, deleteDis } from "../repositorys/user.repository";


//user validation
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

