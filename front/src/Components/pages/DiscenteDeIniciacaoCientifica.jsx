
import { Link } from "react-router-dom"
import styles from "./Docs.module.css"

function DiscenteDeIniciacaoCientifica(){
    return(
        <>
        <div className={styles.header_title}>
            <span>Discente de iniciação Científica/IC</span>
        </div>
        <div className={styles.container_Ini}>
            <div className={styles.container_texts}>
                <div className={styles.docs_dicen}>
                    <h1 className={styles.title}>Editais e Inscrições</h1>
                    <div className={styles.edits_docs}>
                        <Link to={'/discentedeinicicaocientifica/inscrição'}>
                            <button>
                                Inscrição
                            </button>
                        </Link>
                        <p>possiveis editais</p>

                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default DiscenteDeIniciacaoCientifica