import { Api } from '../../axios'
import { useEffect, useState } from "react"
import Pagination from "../pagination"
import ItemsProjects from "../ItemsProjetos"

// eslint-disable-next-line react/prop-types
function MyProjectsItems({url, Auth}) {
    
    const [projetos, setProjetos] = useState([])
    // eslint-disable-next-line no-unused-vars
    const [itemsPerPage, setItemsPerPage] = useState(4)
    const [currentPage, setCurrentPage] = useState(0)


    const pages = Math.ceil(projetos.length / itemsPerPage)
    const startIndex = currentPage * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const currentItems = projetos.slice(startIndex, endIndex)


    const getProjects = async (req, res) => {
        try {
            const id = JSON.parse(localStorage.getItem(`@Auth:${Auth}`))
            const Myproject = await Api.get(`/${url}/${id.id}`)
            const projects = Myproject.data.Projetos
            setProjetos(projects)
        } catch (error) {
            res.status(401).json({ error: 'Erro interno do servidor' })
        }
    }

    useEffect(() => {
        getProjects()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return(
        <>
            <Pagination setCurrentPage={setCurrentPage} pages={pages} currentPage={currentPage}/>
            <ItemsProjects projetos={projetos} currentItems={currentItems}/>
        </>
    )
}

export default MyProjectsItems