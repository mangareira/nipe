import styles from "./Docs.module.css"
import { Inscrições } from "../Inscrições"
import { SubNavBar } from "../SubNavbarItems"

function DiscenteDeIniciacaoCientifica(){
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
                        <Inscrições inscrição={"/discentedeinicicaocientifica/inscricoeseresultados/inscrição"} login={"/login/dis"}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DiscenteDeIniciacaoCientifica