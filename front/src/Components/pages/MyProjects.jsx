import MyProjectsItems from "../MyProjects/Myprojects"
import Projects from "../SubNavbarItems/Projects"
import styles from "./Docs.module.css"


function MyProjects() {

    return(
        <>
            <div className={styles.header_title}>
                    <span>Projetos</span>
            </div>
            <div className={styles.createprojects_container}>
                <div className={styles.createprojects}>
                    <div className={styles.navbar_docs}>
                        <h2 className={styles.title_nav}>Menu</h2>
                        <ul>
                            <Projects/>
                        </ul>
                    </div>
                    <div className={styles.content_container_projects}>
                        <MyProjectsItems/>
                    </div>
                </div>
            </div>
        </>
    )

}

export default MyProjects