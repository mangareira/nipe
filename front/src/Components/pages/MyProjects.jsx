import { MenuProjects } from "../MenuProjects"
import MyProjectsItems from "../MyProjects/Myprojects"
import styles from "./Docs.module.css"


function MyProjects() {

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
                    <div className={styles.content_container_projects}>
                        <MyProjectsItems 
                        url={'user-unique'}
                        Auth={'user'}
                        />
                    </div>
                </div>
            </div>
        </>
    )

}

export default MyProjects