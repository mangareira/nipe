
import styles from "./Docs.module.css"
import Nav from "./Subnav.module.css"
import IniCi from "../SubNavbarItems/IniciacaoCientifica"
import { Link } from "react-router-dom"
import {FaAnglesDown} from "react-icons/fa6"

function InscricoeseResultados(){
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
                        <h1 className={styles.title}>Inscrições e Resultados</h1>
                        <div className={styles.edits_docs}>
                            <h3>Venha Fazer sua Inscrição</h3>
                            <Link to={"/iniciacaocientifica/inscricoeseresultados/inscricoes"}>
                                <button>Inscrição</button>
                            </Link>
                            <Link className={styles.links_login} to={"/login/user"}>
                                <button >Criar Projetos</button>
                            </Link>
                            <div className={styles.results}>
                                <h3>Resultados 2023</h3>
                                <FaAnglesDown className={styles.FaAnglesDown}/>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InscricoeseResultados