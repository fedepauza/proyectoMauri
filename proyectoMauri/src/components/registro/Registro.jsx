
import appFireBase from '../../credencialesFirebase/credenciales'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import React from 'react'


        const Registro = () => {
            return (
                <div>
                    <div className='loginContainer'>
                        <form onSubmit={functionAuth} className="loginCard">
                            <h1 className='titleLogin'>Login</h1>
                            <input type="email" placeholder="Email" className='inputLogin' id='email'/>
                            <input type="password" placeholder="Password" className='inputLogin' id='password'/>
                            <button className='buttonLogin'>{registrando ? "Registrarte" : "Iniciar Sesion"}</button>
                        </form>
                    </div>
                </div>
            )
        }

export default Registro
