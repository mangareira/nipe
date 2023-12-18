import { profUpdate, profRemove} from "../controllers/prof.controller";
import { createProf, getAllProf, getByIdProf } from "../repositorys/user.repository";

const profRoutes = app => {
    app.post("/prof", createProf)
    app.get("/profes", getAllProf)
    app.get("/prof-unique/:id", getByIdProf)
    app.put("/prof/:id", profUpdate)
    app.delete("/prof/:id", profRemove)
}

export default profRoutes