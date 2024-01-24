import { Link } from "react-router-dom"
import styles from "../pages/Docs.module.css"
import { FaAnglesDown } from "react-icons/fa6"

// eslint-disable-next-line react/prop-types
export const Inscrições = ({inscrição, login}) => {
    return(
        <>
            <div className={styles.containerDocs}>
                <h1 className={styles.title}>Inscrições e Resultados</h1>
                <div className={styles.edits_docs}>
                    <h3>Venha Fazer sua Inscrição</h3>
                    <div className={styles.containerBtn}>
                        <Link to={inscrição}>
                            <button>Inscrição</button>
                        </Link>
                        <Link className={styles.links_login} to={login}>
                            <button >Criar Projetos</button>
                        </Link>
                    </div>
                    <div className={styles.results}>
                        <h3>Resultados 2023</h3>
                        <FaAnglesDown className={styles.FaAnglesDown}/>
                    </div>
                </div>
            </div>
        </>
    )
}