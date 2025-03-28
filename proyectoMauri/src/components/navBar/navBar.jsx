
import React from 'react'
import './navBar.css'
import { Link } from "react-router-dom";
import appFireBase from '../../credencialesFirebase/credenciales';
import { getAuth, signOut } from 'firebase/auth';

const auth = getAuth(appFireBase)

        function NavBar () {

            return (

                <nav className='navBar'>

                    <ul className='navBarUl'>
                        <Link to='/add' className='linkNav'>Administrar</Link>
                        <Link to='/registro' className='linkNav'>Registrarse</Link>
                        <button onClick={()=> signOut(auth)}>Cerrar sesion</button>
                    </ul>

                </nav>

            )
        }

export default NavBar 