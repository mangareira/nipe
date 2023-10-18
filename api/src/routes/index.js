import userRoutes from "./user.routes";
import profRoutes from "./prof.route";
import discenteRoutes from "./discente.route";
import grupRoutes from "./grup.routes";


const routes = app => {
    userRoutes(app)
    profRoutes(app)
    discenteRoutes(app)
    grupRoutes(app)
}

export default routes