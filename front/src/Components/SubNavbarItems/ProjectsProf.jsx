import { Link } from 'react-router-dom'
import  {ProjectItem}  from './ProjectItemProf'


function ProjectsProf (){
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

export default ProjectsProf