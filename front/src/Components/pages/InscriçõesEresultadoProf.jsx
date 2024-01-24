
import styles from "./Docs.module.css"
import { Inscrições } from "../Inscrições"
import { SubNavBar } from "../SubNavbarItems"

function InscricoesEresultadoProf(){
    return(
        <>
            <div className={styles.header_title}>
                <span>Inscrição e Resultados</span>
            </div>
            <div className={styles.container_Ini}>
                <div className={styles.container_texts}>
                    <SubNavBar 
                    DropDown={'Docente'}
                    items={'Docente'}
                    />
                    <div className={styles.docs}>
                        <Inscrições inscrição={"/programas/inscricoeseresultados/inscriçoes"} login={"/login/prof"}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InscricoesEresultadoProf