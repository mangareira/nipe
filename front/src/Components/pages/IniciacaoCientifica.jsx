
import styles from "./Docs.module.css"
import Notice from '../Notices'
import { Outlet } from "react-router-dom"
import { SubNavBar } from "../SubNavbarItems"

function IniciacaoCientifica(){
    return(
        <>
            <div className={styles.header_title}>
                <span>Iniciação Científica</span>
            </div>
            <div className={styles.container_Notices}>
                <div className={styles.container_texts}>
                    <SubNavBar 
                    DropDown={'Iniciação'}
                    items={'Iniciação'}
                    />
                    <div className={styles.docs}>
                        <div className={styles.containerDocs}>
                            <h1 className={styles.title}>Noticias</h1>
                            <div className={styles.edits_docs}>
                                <div className={styles.postsCenter}>
                                    <div className={styles.posts}>
                                        <Notice/>
                                    </div>
                                </div>
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