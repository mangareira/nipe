import { AuthController, AuthControllerDis, AuthControllerGrup, AuthControllerProf } from "../AuthController/Index"

const authController = new AuthController()
const authControllerProf = new AuthControllerProf()
const authControllerGrup = new AuthControllerGrup()
const authControllerDis = new AuthControllerDis()

const authRoutes = app => {
    app.post("/auth/user", authController.authenticate)
    app.post("/auth/prof", authControllerProf.authenticate)
    app.post("/auth/grup", authControllerGrup.authenticate)
    app.post("/auth/dis", authControllerDis.authenticate)
}


export default authRoutes