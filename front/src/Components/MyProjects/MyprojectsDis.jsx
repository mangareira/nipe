import axios from "axios"
import { useEffect, useState } from "react"
import styles from "../pages/Docs.module.css"

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
            const id = JSON.parse(localStorage.getItem('@Auth:dis'))
            const Myproject = await axios.get(`http://localhost:3002/dicente-unique/${id.id}`)
            const projects = Myproject.data.Projetos
            setProjetos(projects)
        } catch (error) {
            res.status(401).json({ error: 'Erro interno do servidor' })
        }
    }

    useEffect(() => {
        getProjects()
    }, [])


    return(
        <>
            <div className={styles.btn_container}>
                {Array.from(Array(pages), (item, index) => {
                    const uniqueKey = `page_${index}`
                    return (
                        <div  key={uniqueKey}>
                            <button 
                            style={index === currentPage ? {backgroundColor: "#21d4fd", color: "#fff"} : null}
                            className={styles.btn_page}
                            value={index} 
                            onClick={(e) => setCurrentPage(Number(e.target.value))}>
                                {index + 1}
                            </button>
                        </div>
                    )
                })}
            </div>
            {projetos.length === 0 ? (<p className={styles.loading}>carrengando ...</p>) : (
                currentItems.map((projeto) => (
                    <div className={styles.box_resumo} key={projeto.id}>
                        <div className={styles.header_temas}>Tema:</div>
                        <div>{projeto.tema}</div>
                        <div className={styles.header_temas}>Resumo:</div>
                        <div>{projeto.resumo}</div>
                    </div>
                ))
            )}
            
        </>
    )
}

export default MyProjectsItems