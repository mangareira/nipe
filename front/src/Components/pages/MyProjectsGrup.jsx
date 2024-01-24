import { MenuProjects } from "../MenuProjects"
import MyProjectsItems from "../MyProjects/Myprojects"
import styles from "./Docs.module.css"


function MyProjectsGrup() {

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
                    <div className={styles.content_container_projects}>
                        <MyProjectsItems 
                        url={'grup-unique'}
                        Auth={'grup'}
                        />
                    </div>
                </div>
            </div>
        </>
    )

}

export default MyProjectsGrup