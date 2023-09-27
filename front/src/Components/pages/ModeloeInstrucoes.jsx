
import styles from "./Docs.module.css"
import Nav from "./Subnav.module.css"
import IniCi from "../SubNavbarItems/IniciacaoCientifica"

function ModeloeInstrucoes(){
    return(
        <>
            <div className={styles.header_title}>
                <span>Iniciação Científica</span>
            </div>
            <div className={styles.container_Ini}>
                <div className={styles.container_texts}>
                    <div className={Nav.navbar_docs}>
                        <h2 className={Nav.title_nav}>Iniciação Científica</h2>
                        <ul>
                            <IniCi/>
                        </ul>
                    </div>
                    <div className={styles.docs}>
                        <h1 className={styles.title}>Modelo e Instruções</h1>
                        <div className={styles.edits_docs}>
                            <p>possiveis editais</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModeloeInstrucoes