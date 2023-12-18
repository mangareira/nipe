import {  grupUpdate, grupRemove} from "../controllers/grup.controller";
import { createGrup, getAllGrup, getByIdGrup } from "../repositorys/user.repository";

const grupRoutes = app => {
    app.post("/grup", createGrup)
    app.get("/grupes", getAllGrup)
    app.get("/grup-unique/:id", getByIdGrup)
    app.put("/grup/:id", grupUpdate)
    app.delete("/grup/:id", grupRemove)
}

export default grupRoutes