import styles from "./Docs.module.css"
import { CreateProjectsProp } from "../CreateProjects"
import { MenuProjects } from "../MenuProjects"

function CreateProjects() {

    
    return(
        <>
            <div className={styles.header_title}>
                    <span>Projetos</span>
            </div>
            <div className={styles.createprojects_container}>
                <div className={styles.createprojects}>
                    <MenuProjects 
                    DropDown={'User'}
                    item={'user'} 
                    />
                    <CreateProjectsProp 
                    Auth={'user'}
                    url={'project'}
                    />
                </div>
            </div>
        </>
    )
}

export default CreateProjects 