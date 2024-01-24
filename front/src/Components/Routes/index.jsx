import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import Editais from '../pages/Editais'
import InscricoesGrup from '../pages/inscricoeGrup'
import GrupoDePesquisa from '../pages/GrupoDePesquisa'
import Links from '../pages/Links'
import InscricoesDicente from '../pages/InscriçõesDicente'
import DiscenteDeIniciacaoCientifica from '../pages/DiscenteDeIniciacaoCientifica'
import Extensao from '../pages/Extensao'
import InscricoesProf from '../pages/InscriçõesProf'
import InscricoesEresultadoProf from '../pages/InscriçõesEresultadoProf'
import PesquisaDocente from '../pages/PesquisaDocente'
import FormacaoContinuadaDocente from '../pages/FormacaoContinuadaDocente'
import Inscricoes from '../pages/Inscricoes'
import InscricoeseResultados from '../pages/InscricoeseResultados'
import EditaiseComites from '../pages/EditaiseComites'
import ModeloeInstrucoes from '../pages/ModeloeInstrucoes'
import IniciacaoCientifica from '../pages/IniciacaoCientifica'
import ProfessorPesquisador from '../pages/ProfessorPesquisador'
import LoginPage from '../pages/loginPage'
import LoginPageProf from '../pages/loginPageProf'
import LoginPageDis from '../pages/loginPageDis'
import LoginPageGrup from '../pages/loginPageGrup'
import { PrivateRoute } from '../pages/PrivateRoute'
import MyProjects from '../pages/MyProjects'
import CreateProjects from '../pages/CreateProjects'
import { PrivateRouteProf } from '../pages/PrivateRouteProf'
import MyProjectsProf from '../pages/MyProjectsProf'
import CreateProjectsProf from '../pages/CreateProjectsProf'
import { PrivateRouteDis } from '../pages/PrivateRouteDis'
import MyProjectsDis from '../pages/MyProjectsDis'
import CreateProjectsDis from '../pages/CreateProjectsDis'
import { PrivateRouteGrup } from '../pages/PrivateRouteGrup'
import MyProjectsGrup from '../pages/MyProjectsGrup'
import CreateProjectsGrup from '../pages/CreateProjectsGrup'
import Header from '../Header'
import Footer from '../Footer'
import DiscenteDeIniciacaoCientificaIER from '../pages/DiscenteDeIniciacaoCientificaIER'
import MenuMobile from '../MenuMobile'
import { useState } from 'react'



const RoutesPages = () => {

    const [menuIsVisible, setMenuIsVisible] = useState(false);
    return(
        <Router>
            <MenuMobile
            menuIsVisible={menuIsVisible}
            setMenuIsVisible={setMenuIsVisible}
            />
            <Header setMenuIsVisible={setMenuIsVisible}/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/editais' element={<Editais/>}/>
                <Route path='/grupodepesquisa/inscricoes' element={<InscricoesGrup/>}/>
                <Route path='/grupodepesquisa' element={<GrupoDePesquisa/>}/>
                <Route path='/links' element={<Links/>}/>
                <Route path='/discentedeinicicaocientifica/inscricoeseresultados/inscrição' element={<InscricoesDicente/>}/>
                <Route path='/discentedeinicicaocientifica/inscricoeseresultados' element={<DiscenteDeIniciacaoCientifica/>}/>
                <Route path='/discentedeinicicaocientifica/editais' element={<DiscenteDeIniciacaoCientificaIER/>}/>
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
                    <Route path='/projetos/user/meusprojetos' element={<MyProjects/>}/>
                    <Route path='/projetos/user/criacao' element={<CreateProjects/>}/>
                </Route>
                <Route path='/projetos' element={ <PrivateRouteProf/>}>
                    <Route path='/projetos/prof/meusprojetos' element={<MyProjectsProf/>}/>
                    <Route path='/projetos/prof/criacao' element={<CreateProjectsProf/>}/>
                </Route>
                <Route path='/projetos' element={ <PrivateRouteDis/>}>
                    <Route path='/projetos/dis/meusprojetos' element={<MyProjectsDis/>}/>
                    <Route path='/projetos/dis/criacao' element={<CreateProjectsDis/>}/>
                </Route>
                <Route path='/projetos' element={ <PrivateRouteGrup/>}>
                    <Route path='/projetos/grup/meusprojetos' element={<MyProjectsGrup/>}/>
                    <Route path='/projetos/grup/criacao' element={<CreateProjectsGrup/>}/>
                </Route>
            </Routes>
            <Footer/>
        </Router>
    )
}

export default RoutesPages