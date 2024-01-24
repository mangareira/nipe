import { MenuProjects } from "../MenuProjects"
import MyProjectsItems from "../MyProjects/Myprojects"
import styles from "./Docs.module.css"



function MyProjectsProf() {

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
                    <div className={styles.content_container_projects}>
                        <MyProjectsItems 
                        url={'prof-unique'}
                        Auth={'prof'}
                        />
                    </div>
                </div>
            </div>
        </>
    )

}

export default MyProjectsProf