
import { AuthMiddlewares } from "../middleware"
import { createProjects, createProjectsDis, createProjectsGrup, createProjectsProf, getAllProjects, getAllProjectsDis, getAllProjectsGrup, getAllProjectsProf, getByIdProjects } from "../repositorys/user.repository"


const projectRouter = app => {
    app.post("/project/:authorId", createProjects)
    app.get("/project", getAllProjects)
    app.get("/project-unique/:id", getByIdProjects)

    app.post("/projectprof/:ProfId", createProjectsProf)
    app.get("/projectprof", getAllProjectsProf)

    app.post("/projectdis/:DicenteId", createProjectsDis)
    app.get("/projectdis", getAllProjectsDis)

    app.post("/projectgrup/:gruPesqId", createProjectsGrup)
    app.get("/projectgrup", getAllProjectsGrup)
}


export default projectRouter 