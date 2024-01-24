
import { SubNavBar } from "../SubNavbarItems"
import styles from "./Docs.module.css"

function ProfessorPesquisador(){
    return(
        <>
            <div className={styles.header_title}>
                <span>Professor Pesquisador</span>
            </div>
            <div className={styles.container_Ini}>
                <div className={styles.container_texts}>
                    <SubNavBar 
                    DropDown={'Docente'}
                    items={'Docente'}
                    />
                    <div className={styles.docs}>
                        <div className={styles.containerDocs}>
                            <h1 className={styles.title}>Projeto de pesquisa do(a) professor(a)</h1>
                            <div className={styles.edits_docs}>
                                <p>possiveis editais</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfessorPesquisador