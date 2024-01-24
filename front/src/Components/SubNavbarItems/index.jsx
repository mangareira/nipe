import { MenuPagesMobile } from "../MenuPagesMobile"
import { dropDownItemsDocentes } from "../MenuPagesMobile/items/items"
import SubNavbarItems from "./item"
import { MenuItems } from "./item/MenuItems"
import Nav from "../pages/Subnav.module.css"



// eslint-disable-next-line react/prop-types
export const SubNavBar = ({items, DropDown}) => {
    return(
        <>
        <MenuPagesMobile DropDown={dropDownItemsDocentes[DropDown]}/>
        <div className={Nav.navbar_docs}>
            <h2 className={Nav.title_nav}>Iniciação Científica</h2>
            <ul>
                <SubNavbarItems Item={MenuItems[items]}/>
            </ul>
        </div>
        </>
    )
}