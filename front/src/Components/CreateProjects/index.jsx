import { useState } from "react"
import styles from "../pages/Docs.module.css"
import { Api } from "../../axios"




// eslint-disable-next-line react/prop-types
export const CreateProjectsProp = ({ url, Auth }) => {
    const [tema, setTema] = useState("")
    const [resumo, setResumo] = useState("") 

    const Id = JSON.parse(localStorage.getItem(`@Auth:${Auth}`))


    const handleSubmit = (e) => {
        e.preventDefault()

        if(!tema){
            alert('tema faltando')
        }
        if(!resumo){
            alert('resumo faltando')
        }
        if(tema, resumo){
            Api.post(`/${url}/${Id.id}`, {
            tema,
            resumo
            })
            .then((response) => {
                alert('Criado com sucesso', response.data);
            })
            .catch((error) => {
                console.error('Erro na requisição:', error);
            });
        }
    };
    return(
        <>
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
        </>
    )
}