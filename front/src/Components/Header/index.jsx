import styles from './Header.module.css'
import Navbar from '../Navbar'

// eslint-disable-next-line react/prop-types, no-unused-vars
function Header({ setMenuIsVisible }){


    return(
        <>
            
            <header className={styles.header}>
                <div className={styles.interface}>
                    <Navbar setMenuIsVisible={setMenuIsVisible}/>
                </div>
            </header>
        </>
        
    )
}

export default Header