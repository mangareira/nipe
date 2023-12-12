import {getId, update, remove} from "../controllers/user.controller";
import { AuthMiddlewares } from "../middleware";
import { createUser, getAll } from "../repositorys/user.repository";

const userRoutes = app => {
    app.post("/user", createUser)
    app.get("/useres",AuthMiddlewares ,getAll)
    app.get("/user/:id", getId)
    app.put("/user/:id", update)
    app.delete("/user/:id", remove)
}


export default userRoutes 