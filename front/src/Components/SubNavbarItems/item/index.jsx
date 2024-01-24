/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


function SubNavbarItems ({Item}) {
   return(
     <>
       {Item.map((item, index) => {
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

