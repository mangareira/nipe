import styles from "./Docs.module.css"
import { CreateProjectsProp } from "../CreateProjects"
import { MenuProjects } from "../MenuProjects"

function CreateProjectsGrup() {

    
    return(
        <>
            <div className={styles.header_title}>
                    <span>Projetos</span>
            </div>
            <div className={styles.createprojects_container}>
                <div className={styles.createprojects}>
                    <MenuProjects 
                    DropDown={'Grup'}
                    item={'grup'} 
                    />
                    <CreateProjectsProp 
                    Auth={'grup'}
                    url={'projectgrup'}
                    />
                </div>
            </div>
        </>
    )
}

export default CreateProjectsGrup