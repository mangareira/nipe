import { getByIdProf, updateProf, deleteProf } from "../repositorys/user.repository"


export const profGet = async (req,res) => {
    try{
        const profs = await getAllProf()
        res.status(200).send(profs)
    }catch (e){
        res.status(400).send(e)
    }
}
export const profGetId = async (req, res) => {
    try{
        const prof = await getByIdProf(Number(req.params.id))
        res.status(200).send(prof)
    }catch (e){
        res.status(400).send(e)
    }   
}

export const profUpdate = async (req, res) => {
    try{
        const prof = await updateProf(Number(req.params.id), req.body)
        res.status(200).send(prof) 
    } catch (e) {
        res.status(400).send(e)
    }
}
export const profRemove = async (req, res) => {
    try{
        await deleteProf(Number(req.params.id), req.body)
        res.status(200).send() 
    } catch (e) {
        res.status(400).send(e)
    }
}