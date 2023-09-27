import { linksItems } from './linksItems'
import styles from "../pages/Docs.module.css"
import { Link } from 'react-router-dom'

function LinksShow (){
    return(
        <>
            {linksItems.map((item, index) => {
                return(
                    <div className={styles.linksTo} key={index}>
                        <Link to={item.path} >
                            <div className={styles.linksImg}>
                                <img src={item.logo} alt="logo" className={styles.logo}/>
                            </div>
                        </Link>
                        <div className={styles.linksText}>
                            <Link to={item.path} className={styles.links_text}>
                                {item.text}
                            </Link>
                        </div>
                    </div>
                )
            } )}
        </>
    )
}

export default LinksShow