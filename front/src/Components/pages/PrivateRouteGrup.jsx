import { useContext } from "react"
import { AuthContext } from "../context/auth"
import { Navigate, Outlet } from "react-router-dom"


export const PrivateRouteGrup = () => {
    const { signedGrup } = useContext(AuthContext)

    return signedGrup ? <Outlet/> : <Navigate to={"/login/grup"}/>
}
