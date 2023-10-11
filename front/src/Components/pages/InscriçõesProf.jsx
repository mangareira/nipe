import { Link } from "react-router-dom"
import styles from "./Docs.module.css"
import axios from "axios"
import { useState } from "react";



function InscricoesProf(){

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [description, setDescription] = useState('')
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      axios.post('http://localhost:3002/prof', {
        name,
        email,
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
            <div className={styles.Inscricoes_container}>
                <button >
                    <Link to='/programas/inscricoeseresultados'>
                        Voltar
                    </Link>
                </button>
                <form id="form" onSubmit={handleSubmit}>
                    <label htmlFor="name">Nome Completo:</label>
                    <input type="text" placeholder='Escreva seu nome' name="name" id="name" onChange={(e) => setName(e.target.value)} />
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" placeholder="escreva seu email" onChange={(e) => setEmail(e.target.value)} />
                    <label htmlFor="description">Descrição do projeto:</label>
                    <textarea name="description" id="description" cols="30" rows="10" placeholder="Digite o titulo do conteudo e o que propoem" onChange={(e) => setDescription(e.target.value)}></textarea>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </>
    )
}

export default InscricoesProf