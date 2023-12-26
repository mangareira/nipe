
import styles from "./Docs.module.css"
import Nav from "./Subnav.module.css"
import Dicenteitems from "../SubNavbarItems/NavbarDicente"

function DiscenteDeIniciacaoCientificaIER(){
    return(
        <>
            <div className={styles.header_title}>
                <span>Discente de iniciação Científica/IC</span>
            </div>
            <div className={styles.container_Ini}>
                <div className={styles.container_texts}>
                    <div className={Nav.navbarDic_docs}>
                        <h2 className={Nav.title_nav}>Menu</h2>
                        <ul>
                            <Dicenteitems/>
                        </ul>
                    </div>
                    <div className={styles.docs}>
                        <h1 className={styles.title}>Editais</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DiscenteDeIniciacaoCientificaIER