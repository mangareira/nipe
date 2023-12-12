import { useContext } from "react"
import { AuthContext } from "../context/auth"
import { Navigate, Outlet } from "react-router-dom"


export const PrivateRouteDis = () => {
    const { signedDis } = useContext(AuthContext)

    return signedDis ? <Outlet/> : <Navigate to={"/login/dis"}/>
}
