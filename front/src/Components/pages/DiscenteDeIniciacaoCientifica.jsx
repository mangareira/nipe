
import { Link } from "react-router-dom"
import styles from "./Docs.module.css"
import {FaAnglesDown} from "react-icons/fa6"

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
                        <Link className={styles.links_login} to={"/login/dis"}>
                                <button >Criar Projetos</button>
                        </Link>
                        <div className={styles.editais_docs}>
                            <h3>EDITAIS</h3>
                            <FaAnglesDown className={styles.FaAnglesDown}/>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default DiscenteDeIniciacaoCientifica