import axios from "axios"
import { useEffect, useState } from "react"


function MyProjectsItems() {
    
    const [projetos, setProjetos] = useState([])

    const getProjects = async (req, res) => {
        try {
            const id = JSON.parse(localStorage.getItem('@Auth:grup'))
            const Myproject = await axios.get(`http://localhost:3002/grup-unique/${id.id}`)
            const projects = Myproject.data.Projetos
            setProjetos(projects)
        } catch (error) {
            res.status(400).json({error})
        }
    }

    useEffect(() => {
        getProjects()
    }, [])


    return(
        <>
            {projetos.length === 0 ? (<p>carrengando ...</p>) : (
                projetos.map((projeto) => (
                    <div className="test" key={projeto.id}>
                        <p>{projeto.tema}</p>
                        <p>{projeto.resumo}</p>
                    </div>
                ))
            )}
        </>
    )
}

export default MyProjectsItems