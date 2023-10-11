import styles from './Header.module.css'
import Contato from '../pages/Contato'
import Editais from '../pages/Editais'
import GrupoDePesquisa from '../pages/GrupoDePesquisa'
import Home from '../pages/Home'
import Links from '../pages/Links'
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import Navbar from '../Navbar'
import DiscenteDeIniciacaoCientifica from '../pages/DiscenteDeIniciacaoCientifica'
import Extensao from '../pages/Extensao'
import FormacaoContinuadaDocente from '../pages/FormacaoContinuadaDocente'
import IniciacaoCientifica from '../pages/IniciacaoCientifica'
import PesquisaDocente from '../pages/PesquisaDocente'
import ProfessorPesquisador from '../pages/ProfessorPesquisador'
import EditaiseComites from '../pages/EditaiseComites'
import InscricoeseResultados from '../pages/InscricoeseResultados'
import ModeloeInstrucoes from '../pages/ModeloeInstrucoes'
import Inscricoes from '../pages/Inscricoes'
import InscricoesDicente from '../pages/InscriçõesDicente'
import InscricoesEresultadoProf from '../pages/InscriçõesEresultadoProf'
import InscricoesProf from '../pages/InscriçõesProf'

function Header(){

    return(
        
        <Router>
            <header className={styles.header}>
                <div className={styles.interface}>
                    <Navbar/>
                </div>
            </header>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/editais' element={<Editais/>}/>
                <Route path='/grupodepesquisa' element={<GrupoDePesquisa/>}/>
                <Route path='/links' element={<Links/>}/>
                <Route path='/contato' element={<Contato/>}/>
                <Route path='/discentedeinicicaocientifica/inscrição' element={<InscricoesDicente/>}/>
                <Route path='/discentedeinicicaocientifica' element={<DiscenteDeIniciacaoCientifica/>}/>
                <Route path='/extensao' element={<Extensao/>}/>
                <Route path='/programas/inscricoeseresultados/inscriçoes' element={<InscricoesProf/>}/>
                <Route path='/programas/inscricoeseresultados' element={<InscricoesEresultadoProf/>}/>
                <Route path='/programas/pequisadocente' element={<PesquisaDocente/>}/>
                <Route path='/programas/formacaocontinuadadocente' element={<FormacaoContinuadaDocente/>}/>
                <Route path='/iniciacaocientifica/inscricoeseresultados/inscricoes' element={<Inscricoes/>}/>
                <Route path='/iniciacaocientifica/inscricoeseresultados'element={<InscricoeseResultados/>}/>
                <Route path='/iniciacaocientifica/editaisecomites'element={<EditaiseComites/>}/>
                <Route path='/iniciacaocientifica/modeloseinstrucoes'element={<ModeloeInstrucoes/>}/>
                <Route path='/iniciacaocientifica' element={<IniciacaoCientifica/>}/>
                <Route path='/pesquisa/professorpesquisador' element={<ProfessorPesquisador/>}/>
            </Routes>
        </Router>
    )
}

export default Header