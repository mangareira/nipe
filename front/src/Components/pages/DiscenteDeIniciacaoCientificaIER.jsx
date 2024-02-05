
import styles from "./Docs.module.css"
import { SubNavBar } from "../SubNavbarItems"

function DiscenteDeIniciacaoCientificaIER(){
    return(
        <>
            <div className={styles.header_title}>
                <span>Pesquisador visitante</span>
            </div>
            <div className={styles.container_Ini}>
                <div className={styles.container_texts}>
                    <SubNavBar 
                    DropDown={'Dicente'}
                    items={'Dicente'}
                    />
                    <div className={styles.docs}>
                        <div className={styles.containerDocs}>
                            <h1 className={styles.title}>Editais</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DiscenteDeIniciacaoCientificaIER