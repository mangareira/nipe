import { MenuPagesMobile } from "../MenuPagesMobile"
import { dropDownItemsDocentes } from "../MenuPagesMobile/items/items"
import Projects from "./Projects"
import styles from "../pages/Docs.module.css"
import { ProjectItem } from "./ProjectItem"



// eslint-disable-next-line react/prop-types
export const MenuProjects = ({ DropDown, item }) => {
    return(
        <>
            <MenuPagesMobile DropDown={dropDownItemsDocentes.Projects[DropDown]}/>
            <div className={styles.navbar_docs}>
                <h2 className={styles.title_nav}>Menu</h2>
                <ul>
                    <Projects item={ProjectItem[item]} />
                </ul>
            </div>
        </>
    )
}