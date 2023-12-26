/* eslint-disable react/prop-types */
import styles from "../pages/Docs.module.css"

const ItemsProjects = ({projetos, currentItems}) => {
    return(
        <>
        {projetos.length === 0 ? (<p className={styles.loading}>carrengando ...</p>) : (
            currentItems.map((projeto) => (
                <div className={styles.box_resumo} key={projeto.id}>
                    <div className={styles.header_temas}>Tema:</div>
                    <div className={styles.text_temas}>{projeto.tema}</div>
                    <div className={styles.header_temas}>Resumo:</div>
                    <div className={styles.text_temas}>{projeto.resumo}</div>
                </div>
            ))
        )}
        </>
    )
}
export default ItemsProjects