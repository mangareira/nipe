import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";

function SubNavbarItems () {
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

export default SubNavbarItems

