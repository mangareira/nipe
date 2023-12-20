import styles from './Footer.module.css'
import uniLogo from '../../assets/logoUni.png'


function Footer(){
    return(
        <footer className={styles.footer}>
            <img src={uniLogo} alt="logo unicentro" className={styles.logo}/>
            <br/>
            <span className={styles.span}>© 2023 Unicentro. Todos os direitos reservados</span>
        </footer>
    )
}

export default Footer