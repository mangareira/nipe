import { Link, Navigate } from "react-router-dom"
import styles from "./Docs.module.css"
import { useContext, useState } from "react"
import { AuthContext } from "../context/auth"

function LoginPageGrup () {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { signInGrup, signedGrup } = useContext(AuthContext)

    const handleSignIn = async(e) => {
        e.preventDefault()
        const data = {
            email,
            password
        }
        await signInGrup(data)
    }

    if (signedGrup) {
        return <Navigate to={"/projetos/grup/meusprojetos"}/>
    } else {
        return(
            <>
                <div className={styles.header_title}>
                    <span>Login</span>
                </div>
                <div className={styles.container_login}>
                    <div className={styles.login_container}>
                        <div className={styles.login_page}>
                            <form onSubmit={handleSignIn} className={styles.login_form}>
                                <div className={styles.form_login}>
                                    <input type="email" className={email !== "" ? `${styles.input} ${styles.has_value}` : `${styles.input}`} value={email} onChange={e => setEmail(e.target.value)}/>
                                    <span data-placeholder='Email' className={styles.focus_input}></span>
                                </div>
                                <div className={styles.form_login}>
                                    <input type="password" className={password !== "" ? `${styles.input} ${styles.has_value}` : `${styles.input}`} value={password} onChange={e => setPassword(e.target.value)}/>
                                    <span data-placeholder='Password' className={styles.focus_input}></span>
                                </div>
                                <div className={styles.login_btn_container}>
                                    <button type="submit" className={styles.login_btn}>Login</button>
                                </div>
                                <div className={styles.text_center}>
                                    <span className={styles.text}>Não estar inscrito?</span>
                                    <Link className={styles.text_2} to={"/grupodepesquisa/inscricoes"}>Se inscreva</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        )
    }

}

export default LoginPageGrup