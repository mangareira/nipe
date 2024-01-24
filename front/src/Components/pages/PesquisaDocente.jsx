
import { SubNavBar } from "../SubNavbarItems"
import  styles  from "./Docs.module.css"

function PesquisaDocente(){
    return(
        <>
            <div className={styles.header_title}>
                <span>Pesquisa docente</span>
            </div>
            <div className={styles.container_Ini}>
                <div className={styles.container_texts}>
                    <SubNavBar 
                    DropDown={'Docente'}
                    items={'Docente'}
                    />
                    <div className={styles.docs}>
                        <div className={styles.containerDocs}>
                            <h1 className={styles.title}>Plano de Trabalho do(a) Aluno(a) - Individual</h1>
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

export default PesquisaDocente