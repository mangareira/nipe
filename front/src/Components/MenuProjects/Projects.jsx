/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'


function Projects ({ item }){
    return(
        <>
          {item.map((item, index) => {
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