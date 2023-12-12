import userRoutes from "./user.routes";
import profRoutes from "./prof.route";
import discenteRoutes from "./discente.route";
import grupRoutes from "./grup.routes";
import uploadRoutes from "./upload.routes";
import projectRouter from "./project.routes";
import authRoutes from "./auth.route";


const routes = app => {
    userRoutes(app)
    profRoutes(app)
    discenteRoutes(app)
    grupRoutes(app)
    uploadRoutes(app)
    projectRouter(app)
    authRoutes(app)
}

export default routes