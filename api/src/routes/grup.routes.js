import { grupCreate, grupGet , grupGetId, grupUpdate, grupRemove} from "../controllers/grup.controller";

const grupRoutes = app => {
    app.post("/grup", grupCreate)
    app.get("/grup", grupGet)
    app.get("/grup/:id", grupGetId)
    app.put("/grup/:id", grupUpdate)
    app.delete("/grup/:id", grupRemove)
}

export default grupRoutes