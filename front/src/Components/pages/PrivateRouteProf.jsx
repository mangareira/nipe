import { useContext } from "react"
import { AuthContext } from "../context/auth"
import { Navigate, Outlet } from "react-router-dom"


export const PrivateRouteProf = () => {
    const { signedProf } = useContext(AuthContext)

    return signedProf ? <Outlet/> : <Navigate to={"/login/prof"}/>
}
