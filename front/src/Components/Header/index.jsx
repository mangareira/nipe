import styles from './Header.module.css'
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
import InscricoesGrup from '../pages/inscricoeGrup'
import { PrivateRoute } from '../pages/PrivateRoute'
import { PrivateRouteProf } from '../pages/PrivateRouteProf'
import { PrivateRouteGrup } from '../pages/PrivateRouteGrup'
import { PrivateRouteDis } from '../pages/PrivateRouteDis'
import CreateProjects from '../pages/CreateProjects'
import CreateProjectsProf from '../pages/CreateProjectsProf'
import CreateProjectsGrup from '../pages/CreateProjectsGrup'
import CreateProjectsDis from '../pages/CreateProjectsDis'
import LoginPage from '../pages/loginPage'
import LoginPageProf from '../pages/loginPageProf'
import LoginPageGrup from '../pages/loginPageGrup'
import LoginPageDis from '../pages/loginPageDis'

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
                <Route path='/grupodepesquisa/inscricoes' element={<InscricoesGrup/>}/>
                <Route path='/grupodepesquisa' element={<GrupoDePesquisa/>}/>
                <Route path='/links' element={<Links/>}/>
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
                <Route path='/login/user' element={<LoginPage/>}/>
                <Route path='/login/prof' element={<LoginPageProf/>}/>
                <Route path='/login/dis' element={<LoginPageDis/>}/>
                <Route path='/login/grup' element={<LoginPageGrup/>}/>
                <Route path='/projetos' element={<PrivateRoute/>}>
                    <Route path='/projetos/user/criacao' element={<CreateProjects/>}/>
                </Route>
                <Route path='/projetos' element={ <PrivateRouteProf/>}>
                    <Route path='/projetos/prof/criacao' element={<CreateProjectsProf/>}/>
                </Route>
                <Route path='/projetos' element={ <PrivateRouteDis/>}>
                    <Route path='/projetos/dis/criacao' element={<CreateProjectsDis/>}/>
                </Route>
                <Route path='/projetos' element={ <PrivateRouteGrup/>}>
                    <Route path='/projetos/grup/criacao' element={<CreateProjectsGrup/>}/>
                </Route>
            </Routes>
        </Router>
    )
}

export default Header