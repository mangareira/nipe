
import { SubNavBar } from "../SubNavbarItems"
import styles from "./Docs.module.css"

function FormacaoContinuadaDocente(){
    return(
        <>
            <div className={styles.header_title}>
                <span>Formação Continuada Docente</span>
            </div>
            <div className={styles.container_Ini}>
                <div className={styles.container_texts}>
                    <SubNavBar 
                    DropDown={'Docente'}
                    items={'Docente'}
                    />
                        <div className={styles.docs}>
                            <div className={styles.containerDocs}>
                            <h1 className={styles.title}>Formação Continuada do(a) Professor(a)</h1>
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

export default FormacaoContinuadaDocente