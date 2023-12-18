import { disGetId, disUpdate, disRemove} from "../controllers/dicente.controller.js";
import { createDis, getAllDis, getByIdDis } from "../repositorys/user.repository.js";

const discenteRoutes = app => {
    app.post("/dicente", createDis)
    app.get("/dicentes", getAllDis)
    app.get("/dicente-unique/:id", getByIdDis)
    app.put("/dicente/:id", disUpdate)
    app.delete("/dicente/:id", disRemove)
}


export default discenteRoutes 