
import './Login.css'
import { useState } from 'react'
import appFireBase from '../../credencialesFirebase/credenciales'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'



const auth = getAuth(appFireBase)

function Login () { 

    const [ registrando, setRegistrando ] = useState (false)

    const functionAuth = async (e) => {
        e.preventDefault()
        const correo = e.target.email.value
        const contraseña = e.target.password.value

        if (registrando){
            await createUserWithEmailAndPassword(auth, correo, contraseña)
        }
        else {
            try {
                await signInWithEmailAndPassword(auth, correo, contraseña)

            }
            catch (error) {
                alert('Usuario o contraseña incorrectos')
            }
        }
    }

    return (

        <div className='loginContainer'>

            <form onSubmit={functionAuth} className="loginCard">
                <h1 className='titleLogin'>{registrando ? "Registrate" : "Inicia sesion"}</h1>
                <input type="email" placeholder="Email" className='inputLogin' id='email'/>
                <input type="password" placeholder="Password" className='inputLogin' id='password'/>
                <button className='buttonLogin'>{registrando ? "Registrarte" : "Iniciar Sesion"}</button>
            </form>
        </div>
    )
}

export default Login