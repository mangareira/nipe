import Container from '../Container'
import SlideShow from '../SlideShow'
import styles from './Docs.module.css'
import { Link } from 'react-router-dom'


function Home(){
    return(
        <>
            <SlideShow/>
            <Container>
                <div className={styles.presentation}>
                    <h1 className={styles.title_home}>
                    Aprendizado Além da Sala de Aula:<br/>
                    Envolvimento em Pesquisa
                    </h1>
                    <p className={styles.text_home}>
                    Os programas de iniciação científica, pesquisa e extensão oferecidos pelo NIPE<br/> tem como objetivo propiciar a concretização de mudanças na realidade sociocultural,<br/> política e econômica do Município de Barra do Corda-MA, por meio do tripé da educação:<br/> ensino, pesquisa e extensão.
                    </p>
                    <Link to='/iniciacaocientifica'><button className={styles.btn}>
                        Iniciar sua Pesquisa/Aluno
                    </button></Link>
                    <Link to='/pequisadocente'><button className={styles.btn}>
                        Iniciar sua Pesquisa/Professor
                    </button></Link>
                </div>
                <figure>
                    <img src="/bookReader.svg" alt="ilustração home" className={styles.img_home}/>
                </figure>
            </Container>
        </>
    )
}

export default Home