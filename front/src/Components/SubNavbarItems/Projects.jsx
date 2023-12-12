import { Link } from 'react-router-dom'
import  {ProjectItem}  from './ProjectItem'


function Projects (){
    return(
        <>
          {ProjectItem.map((item, index) => {
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

export default Projects