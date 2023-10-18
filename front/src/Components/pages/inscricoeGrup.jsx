import { Link } from "react-router-dom"
import styles from "./Docs.module.css"
import axios from "axios"
import Ins from "./Inscriçoes.module.css"
import { useState } from "react";



function InscricoesGrup(){

    const [tema, setTema] = useState('')
    const [nameGrup, setNameGrup] = useState('')
    const [description, setDescription] = useState('')
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      axios.post('http://localhost:3002/grup', {
        tema,
        nameGrup,
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
                    <Link to="/grupodepesquisa" className={Ins.back}>
                        <button  className={Ins.button}>
                            Voltar
                        </button>
                    </Link>
                    <div className={Ins.form}>
                        <label htmlFor="tema">Tema da Pesquisa</label>
                    </div>
                    <div className={Ins.form_input}>
                        <input type="text" name="tema" id="tema" placeholder="Escreva o tema Proposto" onChange={(e) => setTema(e.target.value)} className={Ins.input}/>
                    </div>
                    <div className={Ins.form}>
                        <label htmlFor="nameGrup">Nomes das pessoas do grupo:</label>
                    </div>
                    <div className={Ins.form_input}>
                        <input type="text" placeholder='Escreva os nomes dos integrantes' name="nameGrup" id="nameGrup" onChange={(e) => setNameGrup(e.target.value)} className={Ins.input} />
                    </div>
                    <div className={Ins.form}>
                        <label htmlFor="description">Descrição do projeto:</label>
                    </div>
                    <div className={Ins.form_input}>
                        <textarea name="description" id="description" type="text" placeholder="Digite o titulo do conteúdo e o que propoem" onChange={(e) => setDescription(e.target.value)} className={Ins.input_description}/>
                    </div>
                    <input type="submit" value="Submit" className={Ins.buttonSubmit}/>
                </form>
            </div>
        </>
    )
}

export default InscricoesGrup
