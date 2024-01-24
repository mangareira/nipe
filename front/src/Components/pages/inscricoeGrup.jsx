import { Link } from "react-router-dom"
import styles from "./Docs.module.css"
import { Api } from '../../axios'
import Ins from "./Inscriçoes.module.css"
import { useState } from "react";



function InscricoesGrup(){

    const [nameGrup, setNameGrup] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      Api.post('/grup', {
        nameGrup,
        email,
        password
      })
        .then((response) => {
          alert('Requisição bem-sucedida:', response.data);
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
                        <label htmlFor="nameGrup">Nomes das pessoas do grupo:</label>
                    </div>
                    <div className={Ins.form_input}>
                        <input type="text" placeholder='Escreva os nomes dos integrantes' name="nameGrup" id="nameGrup" onChange={(e) => setNameGrup(e.target.value)} className={Ins.input} />
                    </div>
                    <div className={Ins.form}>
                        <label htmlFor="email">Email:</label>
                    </div>
                    <div className={Ins.form_input}>
                        <input type="email" name="email" id="email" placeholder="escreva seu email" onChange={(e) => setEmail(e.target.value)} className={Ins.input}/>
                    </div>
                    <div className={Ins.form}>
                        <label htmlFor="password">Criar uma senha:</label>
                    </div>
                    <div className={Ins.form_input}>
                        <input type="password" placeholder='Escreva sua senha' name="password" id="password" onChange={(e) => setPassword(e.target.value)} className={Ins.input}/>
                    </div>
                    <input type="submit" value="Submit" className={Ins.buttonSubmit}/>
                </form>
            </div>
        </>
    )
}

export default InscricoesGrup
