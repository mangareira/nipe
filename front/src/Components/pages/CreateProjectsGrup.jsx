import styles from "./Docs.module.css"
import Projects from "../SubNavbarItems/ProjectsGrup"
import { useState } from "react"
import axios from "axios"

function CreateProjectsGrup() {

    const [tema, setTema] = useState("")
    const [resumo, setResumo] = useState("") 

    const gruPesqId = JSON.parse(localStorage.getItem('@Auth:grup'))


    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:3002/projectgrup/${gruPesqId.id}`, {
        tema,
        resumo
        })
        .then((response) => {
            alert('Requisição bem-sucedida:', response.data);
        })
        .catch((error) => {
            console.error('Erro na requisição:', error);
        });
    };
    return(
        <>
            <div className={styles.header_title}>
                    <span>Projetos</span>
            </div>
            <div className={styles.createprojects_container}>
                <div className={styles.createprojects}>
                    <div className={styles.navbar_docs}>
                        <h2 className={styles.title_nav}>Menu</h2>
                        <ul>
                            <Projects/>
                        </ul>
                    </div>
                    <div className={styles.content_container_projects}>
                        <form className={styles.form_container} onSubmit={handleSubmit}>
                                <div className={styles.header_projects}>
                                    <h2>Criar Projeto</h2>
                                </div>
                                <div className={styles.div_projects}>
                                    <input type="text" className={tema !== "" ? `${styles.input_projects} ${styles.project_value}` : `${styles.input_projects}`} value={tema}  onChange={e => setTema(e.target.value)}/>
                                    <span data-placeholder='Tema' className={styles.title_project} ></span>
                                </div>
                                <div className={styles.div_projects}>
                                    <input type="text" className={resumo !== "" ? `${styles.input_projects} ${styles.project_value}` : `${styles.input_projects}`} value={resumo}  onChange={e => setResumo(e.target.value)} />
                                    <span className={styles.title_project} data-placeholder='Resumo'></span>
                                </div>
                                <div className={styles.projects_btn_container}>
                                    <button type="submit" className={styles.projects_btn}>Criar</button>
                                </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateProjectsGrup