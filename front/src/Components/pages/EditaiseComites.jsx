
import { SubNavBar } from "../SubNavbarItems"
import styles from "./Docs.module.css"

function EditaiseComites(){
    return(
        <>
            <div className={styles.header_title}>
                <span>Iniciação Científica</span>
            </div>
            <div className={styles.container_Ini}>
                <div className={styles.container_texts}>
                    <SubNavBar 
                    DropDown={'Iniciação'}
                    items={'Iniciação'}
                    />
                    <div className={styles.docs}>
                        <div className={styles.containerDocs}>
                            <h1 className={styles.title}>Editais e Comitês</h1>
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

export default EditaiseComites