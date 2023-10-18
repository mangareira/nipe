
import styles from "./Docs.module.css"

function Editais(){
    return(
        <>
        <div className={styles.header_title}>
            <span>Editais/Gerais</span>
        </div>
        <div className={styles.container_Ini}>
            <div className={styles.container_texts}>
                <div className={styles.docs_dicen}>
                    <h1 className={styles.title}>Editais</h1>
                    <div className={styles.edits_docs_pagfull}>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default Editais