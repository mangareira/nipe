import userRoutes from "./user.routes";
import profRoutes from "./prof.route";
import discenteRoutes from "./discente.route";
import grupRoutes from "./grup.routes";
import uploadRoutes from "./upload.routes";


const routes = app => {
    userRoutes(app)
    profRoutes(app)
    discenteRoutes(app)
    grupRoutes(app)
    uploadRoutes(app)
}

export default routes