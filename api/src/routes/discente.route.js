import { disCreate, disGet , disGetId, disUpdate, disRemove} from "../controllers/dicente.controller.js";

const discenteRoutes = app => {
    app.post("/dicente", disCreate)
    app.get("/dicente", disGet)
    app.get("/dicente/:id", disGetId)
    app.put("/dicente/:id", disUpdate)
    app.delete("/dicente/:id", disRemove)
}


export default discenteRoutes 