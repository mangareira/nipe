import userRoutes from "./user.routes";
import profRoutes from "./prof.route";
import discenteRoutes from "./discente.route";

const routes = app => {
    userRoutes(app)
    profRoutes(app)
    discenteRoutes(app)
}

export default routes