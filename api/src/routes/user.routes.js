import { AuthMiddlewares } from "../middleware";
import { createUser, deleteUser, getAll, getById, updateUser } from "../repositorys/user.repository";

const userRoutes = app => {
    app.post("/user", createUser)
    app.get("/useres",AuthMiddlewares ,getAll)
    app.get("/user-unique/:id", getById)
    app.put("/user-update/:id",AuthMiddlewares,  updateUser)
    app.delete("/user-delete/:id",AuthMiddlewares,  deleteUser)
}


export default userRoutes 