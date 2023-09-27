
import styles from "./Docs.module.css"
import Nav from "./Subnav.module.css"
import IniCi from "../SubNavbarItems/IniciacaoCientifica"
import Notice from '../Notices'
import { Outlet } from "react-router-dom"

function IniciacaoCientifica(){
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
                        <h1 className={styles.title}>Noticias</h1>
                        <div className={styles.edits_docs}>
                            <div className={styles.posts}>
                                <Notice/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Outlet/>
        </>
    )
}

export default IniciacaoCientifica