import styles from "./Docs.module.css"
import { CreateProjectsProp } from "../CreateProjects"
import { MenuProjects } from "../MenuProjects"

function CreateProjectsDis() {

    
    return(
        <>
            <div className={styles.header_title}>
                    <span>Projetos</span>
            </div>
            <div className={styles.createprojects_container}>
                <div className={styles.createprojects}>
                    <MenuProjects 
                    DropDown={'Dis'}
                    item={'dis'} 
                    />
                    <CreateProjectsProp 
                    Auth={'dis'}
                    url={'projectdis'}
                    />
                </div>
            </div>
        </>
    )
}

export default CreateProjectsDis