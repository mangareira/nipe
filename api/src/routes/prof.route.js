import { profGetId, profUpdate, profRemove} from "../controllers/prof.controller";
import { createProf, getAllProf } from "../repositorys/user.repository";

const profRoutes = app => {
    app.post("/prof", createProf)
    app.get("/profes", getAllProf)
    app.get("/prof/:id", profGetId)
    app.put("/prof/:id", profUpdate)
    app.delete("/prof/:id", profRemove)
}

export default profRoutes