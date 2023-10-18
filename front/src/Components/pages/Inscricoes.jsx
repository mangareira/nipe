import { Link } from "react-router-dom"
import styles from "./Docs.module.css"
import axios from "axios"
import { useState } from "react";
import Ins from "./Inscriçoes.module.css"



function Inscricoes(){

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [turma, setTurma] = useState('')
    const [periodo, setPeriodo] = useState('')
    const [description, setDescription] = useState('')
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      axios.post('http://localhost:3002/user', {
        name,
        email,
        turma,
        periodo,
        description
      })
        .then((response) => {
          console.log('Requisição bem-sucedida:', response.data);
          // Faça algo com os dados de resposta, se necessário
        })
        .catch((error) => {
          console.error('Erro na requisição:', error);
          // Lide com erros, se necessário
        });
    };

    return(
        <>
            <div className={styles.header_title}>
                <span>Inscrições</span>
            </div>
            <div className={Ins.Inscricoes_container}>
                
                <form id="form" onSubmit={handleSubmit} className={Ins.form_container}>
                    <Link to='/iniciacaocientifica/inscricoeseresultados' className={Ins.back}>
                        <button className={Ins.button}>
                            Voltar                        
                        </button>
                    </Link>
                    <div className={Ins.form}>
                        <label htmlFor="name">Nome Completo:</label>
                    </div>
                    <div className={Ins.form_input}>
                        <input type="text" placeholder='Escreva seu nome' name="name" id="name" onChange={(e) => setName(e.target.value)} className={Ins.input}/>
                    </div>
                    <div className={Ins.form}>
                        <label htmlFor="email">Email:</label>
                    </div>
                    <div className={Ins.form_input}>
                        <input type="email" name="email" id="email" placeholder="escreva seu email" onChange={(e) => setEmail(e.target.value)} className={Ins.input}/>
                    </div>
                    <div className={Ins.form}>
                        <label >turma:</label>
                    </div>    
                    <div className={Ins.form_input}>
                        <select name="turma" id="turma" onChange={(e) => setTurma(e.target.value)} className={Ins.input}>
                            <option value="" >Selecione:</option>
                            <option value="psicologia">Psicologia</option>
                            <option value="engenharia-civil">Engenharia Civil</option>
                            <option value="serviço-social">Serviço-Social</option>
                            <option value="emfermagem">Enfermagem</option>
                            <option value="admistração">Admistração</option>
                            <option value="direito">Direito</option>
                        </select>
                    </div>
                    <div className={Ins.form}>
                        <label htmlFor="periodo">Periodo:</label>
                    </div>
                    <div className={Ins.form_input}>
                        <select name="periodo" id="periodo" onChange={(e) => setPeriodo(e.target.value)}className={Ins.input}>
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
                    </div>    
                    <div className={Ins.form}>
                        <label htmlFor="description">Descrição do projeto:</label>
                    </div>
                    <div className={Ins.form_input}>
                        <textarea name="description" id="description" placeholder="Digite o titulo do conteudo e o que propoem" onChange={(e) => setDescription(e.target.value)} className={Ins.input_description}></textarea>
                    </div>    
                    <input type="submit" value="Submit" className={Ins.buttonSubmit} />
                </form>
            </div>
        </>
    )
}

export default Inscricoes