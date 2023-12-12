
import { createProjects, createProjectsDis, createProjectsGrup, createProjectsProf, getAllProjects, getAllProjectsDis, getAllProjectsGrup, getAllProjectsProf } from "../repositorys/user.repository"


const projectRouter = app => {
    app.post("/project/:authorId", createProjects)
    app.get("/project", getAllProjects)

    app.post("/projectprof/:ProfId", createProjectsProf)
    app.get("/projectprof", getAllProjectsProf)

    app.post("/projectdis/:DicenteId", createProjectsDis)
    app.get("/projectdis", getAllProjectsDis)

    app.post("/projectgrup/:gruPesqId", createProjectsGrup)
    app.get("/projectgrup", getAllProjectsGrup)
}


export default projectRouter 