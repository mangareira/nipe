import axios from "axios"
import { useEffect, useState } from "react"
import Pagination from "../pagination"
import ItemsProjects from "../ItemsProjetos"

function MyProjectsItems() {
    
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
            <Pagination setCurrentPage={setCurrentPage} pages={pages} currentPage={currentPage}/>
            <ItemsProjects projetos={projetos} currentItems={currentItems}/>
        </>
    )
}

export default MyProjectsItems