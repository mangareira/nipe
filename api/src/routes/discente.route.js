import { disGetId, disUpdate, disRemove} from "../controllers/dicente.controller.js";
import { createDis, getAllDis } from "../repositorys/user.repository.js";

const discenteRoutes = app => {
    app.post("/dicente", createDis)
    app.get("/dicentes", getAllDis)
    app.get("/dicente/:id", disGetId)
    app.put("/dicente/:id", disUpdate)
    app.delete("/dicente/:id", disRemove)
}


export default discenteRoutes 