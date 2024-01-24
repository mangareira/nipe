import styles from "./Docs.module.css"
import { CreateProjectsProp } from "../CreateProjects"
import { MenuProjects } from "../MenuProjects"

function CreateProjectsProf() {
    return(
        <>
            <div className={styles.header_title}>
                    <span>Projetos</span>
            </div>
            <div className={styles.createprojects_container}>
                <div className={styles.createprojects}>
                    <MenuProjects 
                    DropDown={'Prof'}
                    item={'prof'} 
                    />
                    <CreateProjectsProp 
                    Auth={'prof'}
                    url={'projectprof'}
                    />
                </div>
            </div>
        </>
    )
}

export default CreateProjectsProf