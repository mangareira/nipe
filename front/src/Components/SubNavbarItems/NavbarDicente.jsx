import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItemsDicente";

function NavBarDicente () {
   return(
     <>
       {MenuItems.map((item, index) => {
           return (
             <li key={index}>
               <Link
                 to={item.path}
               >
                 {item.title}
               </Link>
             </li>
           );
         })}
    </>  
   ) 
}

export default NavBarDicente

