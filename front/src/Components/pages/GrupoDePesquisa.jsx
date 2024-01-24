import styles from "./Docs.module.css"
import { Inscrições } from "../Inscrições"
import { SubNavBar } from "../SubNavbarItems"

function GrupoDePesquisa(){
    return(
        <>
            <div className={styles.header_title}>
                <span>Grupo de Pesquisa</span>
            </div>
            <div className={styles.container_Ini}>
                <div className={styles.container_texts}>
                    <SubNavBar 
                    DropDown={'Iniciação'}
                    items={'Iniciação'}
                    />
                    <div className={styles.docs}>
                        <Inscrições inscrição={"/grupodepesquisa/inscricoes"} login={"/login/grup"}/>
                    </div>
                </div>
            </div>
    </>
    )
}

export default GrupoDePesquisa