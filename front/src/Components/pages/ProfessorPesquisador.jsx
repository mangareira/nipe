
import styles from "./Docs.module.css"
import SubNavbarItems from "../SubNavbarItems"
import Nav from "./Subnav.module.css"

function ProfessorPesquisador(){
    return(
        <>
            <div className={styles.header_title}>
                <span>Professor Pesquisador</span>
            </div>
            <div className={styles.container_Ini}>
                <div className={styles.container_texts}>
                    <div className={Nav.subnavbar_docs}>
                        <h2 className={Nav.subtitle_nav}>Docentes</h2>
                        <ul>
                            <SubNavbarItems/>
                        </ul>
                    </div>
                    <div className={styles.docs}>
                        <h1 className={styles.title}>Projeto de pesquisa do(a) professor(a)</h1>
                        <div className={styles.edits_docs}>
                            <p>possiveis editais</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfessorPesquisador