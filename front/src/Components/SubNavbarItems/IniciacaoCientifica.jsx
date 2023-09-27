import { Link } from 'react-router-dom'
import { MenuIniCe } from './MenuIniCe'


function IniciacaoCientifica (){
    return(
        <>
          {MenuIniCe.map((item, index) => {
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

export default IniciacaoCientifica