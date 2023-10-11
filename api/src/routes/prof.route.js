import { profCreate, profGet , profGetId, profUpdate, profRemove} from "../controllers/prof.controller";

const profRoutes = app => {
    app.post("/prof", profCreate)
    app.get("/prof", profGet)
    app.get("/prof/:id", profGetId)
    app.put("/prof/:id", profUpdate)
    app.delete("/prof/:id", profRemove)
}

export default profRoutes