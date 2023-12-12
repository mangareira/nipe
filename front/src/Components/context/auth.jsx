import { createContext, useState } from "react";
import axios from "axios"
import { useEffect } from "react";
import { Navigate } from "react-router-dom";

export const AuthContext = createContext()

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [prof, setProf] = useState(null)
    const [dis, setDis] = useState(null)
    const [grup, setGrup] = useState(null)

    useEffect(() => {
        const loadingStoreData = async () => {
            const storageUser = localStorage.getItem("@Auth:user")
            const storageToken = localStorage.getItem("@Auth:token")
    
            if(storageUser && storageToken) {
                setUser(storageUser)
            }
        }
        loadingStoreData()
    }, [])
    useEffect(() => {
        const loadingStoreDataProf = async () => {
            const storageUser = localStorage.getItem("@Auth:prof")
            const storageToken = localStorage.getItem("@Auth:token")
    
            if(storageUser && storageToken) {
                setProf(storageUser)
            }
        }
        loadingStoreDataProf()
    }, [])
    useEffect(() => {
        const loadingStoreDataDis = async () => {
            const storageUser = localStorage.getItem("@Auth:dis")
            const storageToken = localStorage.getItem("@Auth:token")
    
            if(storageUser && storageToken) {
                setDis(storageUser)
            }
        }
        loadingStoreDataDis()
    }, [])
    useEffect(() => {
        const loadingStoreDataGrup = async () => {
            const storageUser = localStorage.getItem("@Auth:grup")
            const storageToken = localStorage.getItem("@Auth:token")
    
            if(storageUser && storageToken) {
                setGrup(storageUser)
            }
        }
        loadingStoreDataGrup()
    }, [])


// signIn grup
    const signIn = async ({email, password}) => {
        const response = await axios.post("http://localhost:3002/auth/user", {
            email,
            password
        })

        if (response.data.error) {
            alert(response.data.error)
        }else{
            setUser(response.data.user)
            axios.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${response.data.token}`
            localStorage.setItem("@Auth:token", response.data.token)
            localStorage.setItem("@Auth:user", JSON.stringify(response.data.user))
        }
    }
    const signInProf = async ({email, password}) => {
        const response = await axios.post("http://localhost:3002/auth/prof", {
            email,
            password
        })

        if (response.data.error) {
            alert(response.data.error)
        }else{
            setProf(response.data.user)
            axios.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${response.data.token}`
            localStorage.setItem("@Auth:token", response.data.token)
            localStorage.setItem("@Auth:prof", JSON.stringify(response.data.user))
        }
    }
    const signInDis = async ({email, password}) => {
        const response = await axios.post("http://localhost:3002/auth/dis", {
            email,
            password
        })

        if (response.data.error) {
            alert(response.data.error)
        }else{
            setDis(response.data.user)
            axios.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${response.data.token}`
            localStorage.setItem("@Auth:token", response.data.token)
            localStorage.setItem("@Auth:dis", JSON.stringify(response.data.user))
        }
    }
    const signInGrup = async ({email, password}) => {
        const response = await axios.post("http://localhost:3002/auth/grup", {
            email,
            password
        })

        if (response.data.error) {
            alert(response.data.error)
        }else{
            setGrup(response.data.user)
            axios.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${response.data.token}`
            localStorage.setItem("@Auth:token", response.data.token)
            localStorage.setItem("@Auth:grup", JSON.stringify(response.data.user))
        }
    }

// SignOut grup
    const signOut = () => {
        localStorage.clear()
        setUser(null)
        return <Navigate to={"/"}/>
    }
    const signOutProf = () => {
        localStorage.clear()
        setProf(null)
        return <Navigate to={"/"}/>
    }
    const signOutDis = () => {
        localStorage.clear()
        setDis(null)
        return <Navigate to={"/"}/>
    }
    const signOutGrups = () => {
        localStorage.clear()
        setGrup(null)
        return <Navigate to={"/"}/>
    }

    return <AuthContext.Provider value={{user, prof,dis,grup, signedProf: !!prof, signed: !!user,signedDis: !!dis,signedGrup: !!grup, signIn, signOut, signInProf, signOutProf,signInDis,signInGrup,signOutDis,signOutGrups}}>{children}</AuthContext.Provider>
}
