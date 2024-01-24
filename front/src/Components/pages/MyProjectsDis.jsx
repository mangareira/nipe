import { MenuProjects } from "../MenuProjects"
import MyProjectsItems from "../MyProjects/Myprojects"
import styles from "./Docs.module.css"


function MyProjectsDis() {

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
                    <div className={styles.content_container_projects}>
                        <MyProjectsItems 
                        url={'dicente-unique'}
                        Auth={'dis'}
                        />
                    </div>
                </div>
            </div>
        </>
    )

}

export default MyProjectsDis