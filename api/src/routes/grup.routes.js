import { grupGetId, grupUpdate, grupRemove} from "../controllers/grup.controller";
import { createGrup, getAllGrup } from "../repositorys/user.repository";

const grupRoutes = app => {
    app.post("/grup", createGrup)
    app.get("/grupes", getAllGrup)
    app.get("/grup/:id", grupGetId)
    app.put("/grup/:id", grupUpdate)
    app.delete("/grup/:id", grupRemove)
}

export default grupRoutes