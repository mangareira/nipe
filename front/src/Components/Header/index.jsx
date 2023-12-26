import styles from './Header.module.css'
import Navbar from '../Navbar'

function Header(){

    return(
        <>
            <header className={styles.header}>
                <div className={styles.interface}>
                    <Navbar/>
                </div>
            </header>
        </>
        
    )
}

export default Header