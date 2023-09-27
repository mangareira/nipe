import { Link } from "react-router-dom"
import styles from "./Docs.module.css"
import blogFecth from "../../axios/config"
import { useState } from 'react';




function Inscricoes(){

    const [name, setName] =useState()
    const [email, setEmail] = useState()
    const [description, setDescription] = useState()
    const [turma, setTurma] = useState()
    const [periodo, setPeriodo] =useState()

    function handleSelectCurso(e) {
        setTurma(e.target.value)
    }
    function handleSelectPeriodo(e) {
        setPeriodo(e.target.value)
    }

    const createInscription = async (e) => {
        e.preventDefault()

        const inscription = {name, description, turma, periodo, email}

        await blogFecth.post("/user", {
            body: inscription,
        }).then(response => {
            console.log(response)
        })
    }
    return(
        <>
            <div className={styles.header_title}>
                <span>Inscrições</span>
            </div>
            <div className={styles.Inscricoes_container}>
                <button >
                    <Link to='/iniciacaocientifica/inscricoeseresultados'>
                        Voltar
                    </Link>
                </button>
                <form id="form" onSubmit={(e) => createInscription(e)}>
                    <label>Nome Completo:</label>
                    <input type="text" placeholder='Escreva seu nome' name="name" onChange={(e) => setName(e.target.value)} />
                    <label>Email:</label>
                    <input type="email" name="email" id="email" placeholder="escreva seu email" onChange={(e) => setEmail(e.target.value)}/>
                    <label >turma:</label>
                    <select name="curso" id="curso" onChange={handleSelectCurso}>
                        <option value="selecione" >Selecione:</option>
                        <option value="psicologia">Psicologia</option>
                        <option value="engenharia-civil">Engenharia Civil</option>
                        <option value="serviço-social">Serviço-Social</option>
                        <option value="emfermagem">Enfermagem</option>
                        <option value="admistração">Admistração</option>
                        <option value="direito">Direito</option>
                    </select>
                    <label>Periodo:</label>
                    <select name="periodo" id="periodo" onChange={handleSelectPeriodo}>
                        <option value="" >Selecione:</option>
                        <option value="1° periodo">1° periodo</option>
                        <option value="2° periodo">2° periodo</option>
                        <option value="3° periodo">3° periodo</option>
                        <option value="4° periodo">4° periodo</option>
                        <option value="5° periodo">5° periodo</option>
                        <option value="6° periodo">6° periodo</option>
                        <option value="7° periodo">7° periodo</option>
                        <option value="8° periodo">8° periodo</option>
                        <option value="9° periodo">9° periodo</option>
                        <option value="10° periodo">10° periodo</option>
                    </select>
                    <label >Descrição do projeto:</label>
                    <textarea name="description" id="description" cols="30" rows="10" placeholder="Digite o titulo do conteudo e o que propoem" onChange={(e) => setDescription(e.target.value)}></textarea>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </>
    )
}

export default Inscricoes