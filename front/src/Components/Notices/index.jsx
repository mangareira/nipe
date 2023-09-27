import { Link } from "react-router-dom"
import styles from '../pages/Docs.module.css'
import {NoticeItems} from './NoticeItems'

function SubNavbarItems () {
   return(
     <>
       {NoticeItems.map((item, index) => {
           return (
            <div className={styles.notices} key={index}>  
                <Link to={item.path} >
                    <div className={styles.notices_imgs}>                         
                        <img src={item.img} alt="noticias" className={styles.imgs_notices}/>    
                    </div>       
                </Link>
                <div className={styles.notices_text} >
                    <h1 className={styles.title_notices}>{item.title}</h1>
                    <p className={styles.text_notices}>{item.text}</p>
                    <Link to={item.path}>
                        <span className={styles.text}>Ler Mais </span>
                    </Link>
                </div>
            </div> 
           );
         })}
    </>  
   ) 
}

export default SubNavbarItems