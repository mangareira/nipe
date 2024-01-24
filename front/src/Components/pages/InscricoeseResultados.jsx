
import styles from "./Docs.module.css"
import { Inscrições } from "../Inscrições"
import { SubNavBar } from "../SubNavbarItems"

function InscricoeseResultados(){
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
                        <Inscrições inscrição={"/iniciacaocientifica/inscricoeseresultados/inscricoes"} login={"/login/user"}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InscricoeseResultados