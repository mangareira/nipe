
import styles from "./Docs.module.css"
import  LinksShow  from "../linksShow"

function Links(){
    return(
        <>
            <div className={styles.container_links}>
                <div className={styles.links}>
                    <LinksShow/>
                </div>
            </div>
        </>
    )
}

export default Links