
import  styles  from "./Docs.module.css"
import SubNavbarItems from "../SubNavbarItems"
import Nav from "./Subnav.module.css"

function PesquisaDocente(){
    return(
        <>
            <div className={styles.header_title}>
                <span>Pesquisa docente</span>
            </div>
            <div className={styles.container_Ini}>
                <div className={styles.container_texts}>
                    <div className={Nav.navbar_docs}>
                        <h2 className={Nav.title_nav}>Docentes</h2>
                        <ul>
                            <SubNavbarItems/>
                        </ul>
                    </div>
                    <div className={styles.docs}>
                        <h1 className={styles.title}>Plano de Trabalho do(a) Aluno(a) - Individual</h1>
                        <div className={styles.edits_docs}>
                            <p>possiveis editais</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PesquisaDocente